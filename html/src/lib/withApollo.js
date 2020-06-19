import {InMemoryCache} from "apollo-cache-inmemory"
import {ApolloProvider} from '@apollo/react-hooks'
import {WebSocketLink} from "apollo-link-ws"
import {ApolloClient} from "apollo-client"
// import {onError} from 'apollo-link-error'


export default function withApollo(Component) {

  const client = initApolloClient()

  function WithApollo(props) {
    return <ApolloProvider client={client}>
      <Component {...props}/>
    </ApolloProvider>
  }

  WithApollo.displayName = `WithApollo(${
    Component.displayName || Component.name || 'Component'
  })`

  return WithApollo

}


let apolloClientCache = null

function initApolloClient() {
  if (apolloClientCache) {
    return apolloClientCache
  }
  return apolloClientCache = createApolloClient()
}


function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new WebSocketLink({
      uri: `ws://${location.host}/graphql`,
      options: {
        reconnect: true
      },
    }),
  })
}





