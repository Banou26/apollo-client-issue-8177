/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  fragment CommonFragment on Common {\n    common\n    common2\n  }\n": types.CommonFragmentFragmentDoc,
    "\n  fragment FooFragment on Foo {\n    ...CommonFragment\n    foo\n    foo2\n    bar {\n      ...BarFragment\n    }\n  }\n": types.FooFragmentFragmentDoc,
    "\n  fragment BarFragment on Bar {\n    ...CommonFragment\n    bar\n    bar2\n  }\n": types.BarFragmentFragmentDoc,
    "\n  query GetFoo {\n    foo {\n      ...FooFragment\n    }\n  }\n": types.GetFooDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CommonFragment on Common {\n    common\n    common2\n  }\n"): (typeof documents)["\n  fragment CommonFragment on Common {\n    common\n    common2\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FooFragment on Foo {\n    ...CommonFragment\n    foo\n    foo2\n    bar {\n      ...BarFragment\n    }\n  }\n"): (typeof documents)["\n  fragment FooFragment on Foo {\n    ...CommonFragment\n    foo\n    foo2\n    bar {\n      ...BarFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BarFragment on Bar {\n    ...CommonFragment\n    bar\n    bar2\n  }\n"): (typeof documents)["\n  fragment BarFragment on Bar {\n    ...CommonFragment\n    bar\n    bar2\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetFoo {\n    foo {\n      ...FooFragment\n    }\n  }\n"): (typeof documents)["\n  query GetFoo {\n    foo {\n      ...FooFragment\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;