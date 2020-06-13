import {ApolloProvider} from '@apollo/react-hooks'
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {WebSocketLink} from "apollo-link-ws";
import {ApolloLink, split} from "apollo-link";
import {getMainDefinition} from "apollo-utilities";
import Head from 'next/head'


export default function withApollo(App, options) {

  function WithApollo({client, clientState, ctx, ...props}) {

    if (!client) {
      client = initApolloClient(options, ctx, clientState)
    }

    return <ApolloProvider client={client}>
      <App {...props}/>
    </ApolloProvider>
  }


  WithApollo.getInitialProps = async function ({AppTree, ctx}) {
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
        await getDataFromTree(<AppTree  {...{pageProps, client, ctx}}/>)
        clientState = client.cache.extract()
      } catch (error) {
        console.error(error)
      } finally {
        Head.rewind()
      }

    }

    return {pageProps, clientState, client}
  }

  // WithApollo.getInitialProps = NextApp.getInitialProps
  // WithApollo.origGetInitialProps = NextApp.origGetInitialProps

  WithApollo.displayName = `WithApollo(${App.name})`

  return WithApollo

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
      uri: process.env.NEXT_GRAPHQL_SSR,
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
    uri: process.env.NEXT_PUBLIC_GRAPHQL,
  })

  const wsLink = new WebSocketLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_SUBSCRIPTIONS,
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


