import { RouterContext } from 'next/dist/next-server/lib/router-context'
import GlobalStyles from "../components/GlobalStyles/GlobalStyles"
import DefaultLayout from "../components/Layouts/DefaultLayout"
import withApollo from "../lib/withApollo"


function App({Component, pageProps, router}) {

  const Layout = Component['layout'] || DefaultLayout

  return <RouterContext.Provider value={ router }>
    <GlobalStyles/>

    <Layout>
      <Component { ...pageProps }/>
    </Layout>
  </RouterContext.Provider>
}


export default withApollo(App, {/* options */})


