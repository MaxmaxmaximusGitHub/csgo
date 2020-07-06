import styles from './Desktop.styl'
import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Pages from "../../components/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import Confirm from "../../components/Confirm"
import HomePage from "./HomePage/HomePage"
import AboutPage from "./AboutPage/AboutPage"
import Notificator from "../../components/Notificator/Notificator"
import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import Chat from "../../components/Chat/Chat";
import Market from "../../components/Market/Market";
import withRouter from "../../lib/withRouter";
import MarketProvider from "../../components/Market/MarketProvider";


export const pages = [
  {name: 'Home', url: '/', Page: HomePage},
  {name: 'About', url: '/about', Page: AboutPage},
]


function Desktop() {

  return <>
    <MarketProvider>
      <DesktopHeader pages={pages}/>

      <div className={styles.content}>
        <Pages pages={pages}/>
        <Chat/>
      </div>

      <Market/>
      <Confirm/>
      <Notificator/>
    </MarketProvider>
  </>
}


Desktop = withCurrentUser(Desktop)
Desktop = withRouter(Desktop)
Desktop = withApollo(Desktop)


ReactDOM
.unstable_createRoot(document.querySelector('#App'))
.render(<Desktop/>)


