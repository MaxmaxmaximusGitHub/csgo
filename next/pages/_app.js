import {RouterContext} from 'next/dist/next-server/lib/router-context'
import GlobalStyles from "../components/GlobalStyles/GlobalStyles"
import DefaultLayout from "../components/Layouts/DefaultLayout"
import withApollo from "../lib/withApollo"
import withCurrentUser from "../lib/withCurrentUser"
import Notificator, {
  NOTIFICATOR_CONTROLLER
} from '../components/Notificator/Notificator'


function App({Component, pageProps, router}) {

  const Layout = Component['layout'] || DefaultLayout

  return <RouterContext.Provider value={router}>
    <GlobalStyles/>

    <Layout>
      <Component {...pageProps}/>
    </Layout>

    <Notificator/>

  </RouterContext.Provider>
}

App = withCurrentUser(App)

App = withApollo(App, {
  onError(errors) {
    errors.forEach(error => {
      NOTIFICATOR_CONTROLLER.error(error.message)
    })
  }
})


export default App


