import GlobalStyles from "../components/GlobalStyles/GlobalStyles"
import DefaultLayout from "../components/Layouts/DefaultLayout"
import withApollo from "../lib/withApollo"


function App({Component, pageProps}) {

  const Layout = Component['layout'] || DefaultLayout

  return <>
    <GlobalStyles/>

    <Layout>
      <Component { ...pageProps }/>
    </Layout>
  </>
}


export default withApollo(App)


