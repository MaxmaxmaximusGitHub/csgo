import {NOTIFICATOR_CONTROLLER} from "../components/Notificator/Notificator";
import {ApolloProvider} from '@apollo/react-hooks'
import {InMemoryCache} from "apollo-cache-inmemory"
import {WebSocketLink} from "apollo-link-ws"
import {ApolloClient} from "apollo-client"
import {ApolloLink} from 'apollo-link'
import {onError} from 'apollo-link-error'


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
  if (!apolloClientCache) {
    apolloClientCache = createApolloClient()
  }
  return apolloClientCache
}


function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createLink()
  })
}


function createLink() {
  return ApolloLink.from([
    createErrorLink(),
    createWebsocketLink(),
  ])
}


function createWebsocketLink() {
  return new WebSocketLink({
    uri: `ws://${location.host}/graphql`,
    options: {
      reconnect: true
    },
  })
}


function createErrorLink() {
  return onError(function ({graphQLErrors, networkError}) {
    if (graphQLErrors) {
      graphQLErrors.map(({message}) => {
        NOTIFICATOR_CONTROLLER.error(message, 'GraphQL error')
      })
    }

    if (networkError) {
      const {message, extensions} = networkError
      const code = extensions ? extensions.code : null
      NOTIFICATOR_CONTROLLER.error(message, code)
    }
  })
}





