
# @apollo/client issue XXXX

Using these fragments

```ts
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

export const GET_FOO = gql(`
  query GetFoo {
    foo {
      ...FooFragment
    }
  }
`)
```

and querying `GET_FOO` like so

```ts
client
  .query({ query: GET_FOO })
  .then((res) => {
    console.log('res', res)
  })
```

returns the response without any of the CommonFragment fields

```json
{
    "data": {
        "foo": {
            "__typename": "Foo",
            "foo": "foo",
            "foo2": "foo2",
            "bar": {
                "__typename": "Bar",
                "bar": "bar",
                "bar2": "bar2"
            }
        }
    },
    "loading": false,
    "networkStatus": 7
}
```

even though the server responded with the correct fields

```json
{
  "data": {
    "foo": {
      "common": "common",
      "common2": "common2",
      "__typename": "Foo",
      "foo": "foo",
      "foo2": "foo2",
      "bar": {
        "common": "common",
        "common2": "common2",
        "__typename": "Bar",
        "bar": "bar",
        "bar2": "bar2"
      }
    }
  }
}
```
