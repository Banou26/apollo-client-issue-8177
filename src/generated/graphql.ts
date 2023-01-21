/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bar = Common & {
  __typename?: 'Bar';
  bar: Scalars['String'];
  bar2: Scalars['String'];
  common: Scalars['String'];
  common2: Scalars['String'];
};

export type Common = {
  common: Scalars['String'];
  common2: Scalars['String'];
};

export type Foo = Common & {
  __typename?: 'Foo';
  bar: Bar;
  common: Scalars['String'];
  common2: Scalars['String'];
  foo: Scalars['String'];
  foo2: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  foo?: Maybe<Foo>;
};

type CommonFragment_Bar_Fragment = { __typename?: 'Bar', common: string, common2: string };

type CommonFragment_Foo_Fragment = { __typename?: 'Foo', common: string, common2: string };

export type CommonFragmentFragment = CommonFragment_Bar_Fragment | CommonFragment_Foo_Fragment;

export type FooFragmentFragment = { __typename?: 'Foo', foo: string, foo2: string, common: string, common2: string, bar: { __typename?: 'Bar', bar: string, bar2: string, common: string, common2: string } };

export type BarFragmentFragment = { __typename?: 'Bar', bar: string, bar2: string, common: string, common2: string };

export type GetFooQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooQuery = { __typename?: 'Query', foo?: { __typename?: 'Foo', foo: string, foo2: string, common: string, common2: string, bar: { __typename?: 'Bar', bar: string, bar2: string, common: string, common2: string } } | null };

export const CommonFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Common"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"common2"}}]}}]} as unknown as DocumentNode<CommonFragmentFragment, unknown>;
export const BarFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"bar"}},{"kind":"Field","name":{"kind":"Name","value":"bar2"}}]}},...CommonFragmentFragmentDoc.definitions]} as unknown as DocumentNode<BarFragmentFragment, unknown>;
export const FooFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Foo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonFragment"}},{"kind":"Field","name":{"kind":"Name","value":"foo"}},{"kind":"Field","name":{"kind":"Name","value":"foo2"}},{"kind":"Field","name":{"kind":"Name","value":"bar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BarFragment"}}]}}]}},...CommonFragmentFragmentDoc.definitions,...BarFragmentFragmentDoc.definitions]} as unknown as DocumentNode<FooFragmentFragment, unknown>;
export const GetFooDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFoo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooFragment"}}]}}]}},...FooFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetFooQuery, GetFooQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bar: ResolverTypeWrapper<Bar>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Common: ResolversTypes['Bar'] | ResolversTypes['Foo'];
  Foo: ResolverTypeWrapper<Foo>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bar: Bar;
  String: Scalars['String'];
  Common: ResolversParentTypes['Bar'] | ResolversParentTypes['Foo'];
  Foo: Foo;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type BarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bar'] = ResolversParentTypes['Bar']> = {
  bar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bar2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  common?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  common2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Common'] = ResolversParentTypes['Common']> = {
  __resolveType: TypeResolveFn<'Bar' | 'Foo', ParentType, ContextType>;
  common?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  common2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type FooResolvers<ContextType = any, ParentType extends ResolversParentTypes['Foo'] = ResolversParentTypes['Foo']> = {
  bar?: Resolver<ResolversTypes['Bar'], ParentType, ContextType>;
  common?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  common2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  foo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  foo2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  foo?: Resolver<Maybe<ResolversTypes['Foo']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bar?: BarResolvers<ContextType>;
  Common?: CommonResolvers<ContextType>;
  Foo?: FooResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

