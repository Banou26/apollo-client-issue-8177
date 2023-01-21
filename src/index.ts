import { gql } from './generated'

import { ApolloClient, InMemoryCache, HttpLink, DocumentNode } from '@apollo/client'
import { ApolloServer } from '@apollo/server'

import typeDefs from './schema'

export type Context = {
  input: RequestInfo | URL
  init: RequestInit
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers: {
    Query: {
      foo: async (parent, args, context, info) => {
        return {
          common: 'common',
          common2: 'common2',
          foo: 'foo',
          foo2: 'foo2',
          bar: {
            common: 'common',
            common2: 'common2',
            bar: 'bar',
            bar2: 'bar2'
          }
        }
      }
    }
  }
})
server.start()

const cache = new InMemoryCache()

const fetch: (input: RequestInfo | URL, init: RequestInit) => Promise<Response> = async (input, init) => {
  const body = JSON.parse(init.body!.toString())
  const headers = new Map<string, string>()
  for (const [key, value] of Object.entries(init.headers!)) {
    if (value !== undefined) {
      headers.set(key, Array.isArray(value) ? value.join(', ') : value)
    }
  }
  console.log('APOLLO SERVER', body)
  const res = await server.executeHTTPGraphQLRequest({
    httpGraphQLRequest: {
      body,
      headers,
      method: init.method!,
      search: ''
    },
    context: async () => ({ input, init })
  })
  console.log('APOLLO SERVER RESPONSE', res.body.string)
  return new Response(res.body.string, { headers: res.headers })
}

const link = new HttpLink({ fetch })

const client = new ApolloClient({
  link,
  cache
})

export const COMMON_FRAGMENT = gql(`
  fragment CommonFragment on Common {
    common
    common2
  }
`)

export const FOO_FRAGMENT = gql(`
  fragment FooFragment on Foo {
    ...CommonFragment
    foo
    foo2
    bar {
      ...BarFragment
    }
  }
`)

export const BAR_FRAGMENT = gql(`
  fragment BarFragment on Bar {
    ...CommonFragment
    bar
    bar2
  }
`)

export const _GET_FOO = gql(`
  query GetFoo {
    foo {
      ...FooFragment
    }
  }
`)

const removeDuplicate = (document: DocumentNode) => ({
  ...document,
  definitions: document.definitions.reduce((acc, def) => {
    if (acc.find((d) => d.kind === def.kind && d.name?.value === def.name?.value)) {
      return acc
    }
    return [...acc, def]
  }, [] as DocumentNode['definitions'])
})

// bug with graphql-codegen, https://github.com/dotansimha/graphql-code-generator/issues/XXXX
const GET_FOO = removeDuplicate(_GET_FOO)

client
  .query({ query: GET_FOO })
  .then((res) => {
    console.log('res', res)
  })
