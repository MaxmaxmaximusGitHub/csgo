import './admin.styl'
import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Confirm from "../../components/Confirm/Confirm"
import withCurrentUser from "../../lib/withCurrentUser"
import Notificator from "../../components/Notificator/Notificator"
import {BrowserRouter} from "react-router-dom";
import SimulationPage from "./Pages/SimulationPage/SimulationPage"
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage'
import Pages from "../../components/Pages"
import Header from "./Header/Header";


export const pages = [
  {name: 'Home', url: '/', Page: AdminHomePage},
  {name: 'Simulation', url: '/simulation', Page: SimulationPage},
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


console.log('admin')
