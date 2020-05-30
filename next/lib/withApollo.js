import NextApp from "next/app"
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import Head from 'next/head'


export default function withApollo(App, options) {

  function AppWithApollo({client, clientState, ctx, ...props}) {

    if (!client) {
      client = initApolloClient(options, ctx, clientState)
    }

    return <ApolloProvider client={ client }>
      <App { ...props }/>
    </ApolloProvider>
  }


  AppWithApollo.getInitialProps = async function ({AppTree, ctx}) {
    let pageProps = {}
    let clientState = {}
    let client = null

    if (!process.browser) {
      // When redirecting, the response is finished.
      if (ctx.res && ctx.res.finished) {
        return {pageProps}
      }

      const {getDataFromTree} = require('@apollo/react-ssr')
      client = initApolloClient(options, ctx)

      try {
        await getDataFromTree(<AppTree  { ...{pageProps, client, ctx} }/>)
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


function initApolloClient(options, ctx, clientState = null) {
  if (!process.browser) {
    return createApolloClient(options, ctx, clientState)
  }

  if (!browserApolloClientCache) {
    browserApolloClientCache = createApolloClient(options, ctx, clientState)
  }
  return browserApolloClientCache
}


function createApolloClient(options, ctx, clientState = null) {
  const cache = new InMemoryCache()
  const link = createLink(options, ctx)

  const client = new ApolloClient({
    ssrMode: !process.browser,
    cache: cache.restore(clientState),
    link
  })

  client.toJSON = () => null
  return client
}


function createLink(options, ctx) {

  if (!process.browser) {
    const fetch = require('isomorphic-fetch')
    const cookie = ctx.req.headers.cookie || ''

    return new HttpLink({
      uri: process.env.DOCKER_GRAPHQL_ENDPOINT,
      fetch: (url, options) => {
        return fetch(url, {
          ...options,
          compress: false,
          headers: {"Cookie": cookie}
        })
      }
    })
  }

  return createBrowserLink()
}


function createBrowserLink() {
  const httpLink = new HttpLink({
    credentials: 'include',
    uri: `//${ location.host }/graphql`,
  })

  const wsLink = new WebSocketLink({
    uri: `ws://${ location.host }/graphql`,
    options: {
      reconnect: true,
    },
  })

  const terminatingLink = split(({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return (kind === 'OperationDefinition' && operation === 'subscription');
  }, wsLink, httpLink)

  return ApolloLink.from([terminatingLink])
}


