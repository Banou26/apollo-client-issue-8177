import { CodegenConfig } from '@graphql-codegen/cli'

import typeDefs from './src/schema'

const config: CodegenConfig = {
  schema: [typeDefs],
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: ['typescript-resolvers'],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
