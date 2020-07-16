import ApolloClient from 'apollo-boost'

import { resolvers } from './resolvers'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  resolvers: resolvers,
})

export default client
