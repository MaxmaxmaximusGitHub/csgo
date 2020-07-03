import styles from './Desktop.styl'
import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Pages from "../../components/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import {BrowserRouter} from "react-router-dom"
import Confirm from "../../components/Confirm"
import HomePage from "./HomePage/HomePage"
import AboutPage from "./AboutPage/AboutPage"
import Notificator from "../../components/Notificator/Notificator"
import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import Chat from "../../components/Chat/Chat";
import MarketSkins from "../../components/MarketSkins/MarketSkins";


export const pages = [
  {name: 'Home', url: '/', Page: HomePage},
  {name: 'About', url: '/about', Page: AboutPage},
]


function Desktop() {

  return <BrowserRouter>
    <DesktopHeader pages={pages}/>

    <div className={styles.content}>
      <Pages pages={pages}/>
      <Chat/>
    </div>

    <Notificator/>
    <Confirm/>
  </BrowserRouter>
}


Desktop = withCurrentUser(Desktop)
Desktop = withApollo(Desktop)


ReactDOM
.unstable_createRoot(document.querySelector('#App'))
.render(<Desktop/>)


