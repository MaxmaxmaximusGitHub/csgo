import styles from './Desktop.styl'
import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Pages from "../../components/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import Confirm from "../../components/Confirm"
import DesktopHomePage from "./pages/DesktopHomePage/DesktopHomePage"
import Notificator from "../../components/Notificator/Notificator"
import DesktopHeader from "./components/DesktopHeader/DesktopHeader";
import Chat from "../../components/Chat/Chat";
import Market from "./components/DesktopMarket/DesktopMarket";
import withRouter from "../../lib/withRouter";
import AdminPage from "./pages/DesktopAdminPage/DesktopAdminPage";


export const pages = [
  {name: 'Home', url: '/', Page: DesktopHomePage},
  {name: 'Admin', url: '/admin', Page: AdminPage},
]


function Desktop() {

  return <>
    <DesktopHeader pages={pages}/>

    <div className={styles.content}>
      <Pages pages={pages}/>
      <Chat/>
    </div>

    <Market/>
    <Confirm/>
    <Notificator/>
  </>
}


Desktop = withCurrentUser(Desktop)
Desktop = withRouter(Desktop)
Desktop = withApollo(Desktop)


ReactDOM.render(
  <Desktop/>,
  document.querySelector('#App')
)



