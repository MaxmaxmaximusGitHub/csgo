import NextApp from "next/app"
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import Head from 'next/head'


export default function withApollo(App) {

  function AppWithApollo({client, clientState, ...props}) {

    if (!client) {
      client = initApolloClient(clientState)
    }

    return <ApolloProvider client={ client }>
      <App { ...props }/>
    </ApolloProvider>
  }


  AppWithApollo.getInitialProps = async ({AppTree, ctx}) => {
    let pageProps = {}
    let clientState = {}
    let client = null


    if (!process.browser) {
      // When redirecting, the response is finished.
      if (ctx.res && ctx.res.finished) {
        return {pageProps}
      }

      const {getDataFromTree} = require('@apollo/react-ssr')
      client = initApolloClient()

      try {
        await getDataFromTree(<AppTree  { ...{pageProps, client} }/>)
        clientState = client.cache.extract()
      } catch (error) {
        console.error(error)
      } finally {
        Head.rewind()
      }

    }

    return {pageProps, clientState, client}
  }


  // AppWithApollo.getInitialProps = NextApp.getInitialProps
  // AppWithApollo.origGetInitialProps = NextApp.origGetInitialProps

  return AppWithApollo

}


let browserApolloClientCache = null


function initApolloClient(clientState) {
  if (!process.browser) return createApolloClient(clientState)

  if (!browserApolloClientCache) {
    browserApolloClientCache = createApolloClient(clientState)
  }
  return browserApolloClientCache
}


function createApolloClient(clientState) {
  const cache = new InMemoryCache()
  const link = createApolloLink()

  const client = new ApolloClient({
    ssrMode: !process.browser,
    cache: cache.restore(clientState),
    link
  })

  client.toJSON = () => null
  return client
}


function createApolloLink() {
  if (!process.browser) {
    return createServerLink()
  }

  return createBrowserLink()
}

function createServerLink() {
  if (process.browser) return null

  return new HttpLink({
    uri: `http://localhost:8080/v1/graphql`,
    fetch: require('isomorphic-fetch')
  })
}


function createBrowserLink() {
  const httpLink = new HttpLink({
    uri: `http://localhost:8080/v1/graphql`,
  })

  const wsLink = new WebSocketLink({
    uri: `ws://localhost:8080/v1/graphql`,
    options: {
      reconnect: true,
    },
  })

  const terminatingLink = split(({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    );
  }, wsLink, httpLink)

  return ApolloLink.from([terminatingLink])
}


