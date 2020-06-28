import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Confirm from "../../components/Confirm"
import withCurrentUser from "../../lib/withCurrentUser"
import Notificator from "../../components/Notificator/Notificator"
import {BrowserRouter} from "react-router-dom";
import SimulationPage from "./SimulationPage/SimulationPage"
import AdminHomePage from './AdminHomePage/AdminHomePage'
import Pages from "../../components/Pages";


export const pages = [
  {name: 'Home', url: '/', Page: AdminHomePage},
  {name: 'Simulation', url: '/simulation', Page: SimulationPage},
]


function Admin() {

  return <BrowserRouter>
    <Pages pages={pages}/>
    <Notificator/>
    <Confirm/>
  </BrowserRouter>
}


Admin = withCurrentUser(Admin)
Admin = withApollo(Admin)


ReactDOM
.unstable_createRoot(document.querySelector('#App'))
.render(<Admin/>)


console.log('admin')
