import ApolloClient from 'apollo-client'
import {WebSocketLink} from 'apollo-link-ws'
import {InMemoryCache} from 'apollo-cache-inmemory'


export default new ApolloClient({
  link: new WebSocketLink({
    uri: "ws://localhost:8080/v1/graphql"
  }),
  cache: new InMemoryCache(),
})

