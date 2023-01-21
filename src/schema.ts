const typeDefs = `#graphql

  interface Common {
    common: String!
    common2: String!
  }

  type Foo implements Common {
    common: String!
    common2: String!
    foo: String!
    foo2: String!
    bar: Bar!
  }

  type Bar implements Common {
    common: String!
    common2: String!
    bar: String!
    bar2: String!
  }

  type Query {
    foo: Foo
  }
  schema {
    query: Query
  }

`

export default typeDefs

