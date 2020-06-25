import './desktop.styl'
import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Pages from "../../components/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import {BrowserRouter} from "react-router-dom"
import Confirm from "../../components/Confirm/Confirm"
import HomePage from "./Pages/HomePage/HomePage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import Notificator from "../../components/Notificator/Notificator"
import Header from "./Header/Header";


export const pages = [
  {name: 'Home', url: '/', Page: HomePage},
  {name: 'About', url: '/about', Page: AboutPage},
]


function DesktopApp() {

  return <BrowserRouter>
    <Header/>
    <Pages pages={pages}/>
    <Notificator/>
    <Confirm/>
  </BrowserRouter>
}


DesktopApp = withCurrentUser(DesktopApp)
DesktopApp = withApollo(DesktopApp)


ReactDOM
.unstable_createRoot(document.querySelector('#App'))
.render(<DesktopApp/>)


