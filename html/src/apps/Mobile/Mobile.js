import styles from './Mobile.styl'
import 'setimmediate'
import React from 'react'
import ReactDOM from 'react-dom'
import withApollo from "../../lib/withApollo"
import Pages from "../../components/Pages"
import withCurrentUser from "../../lib/withCurrentUser"
import MobileHomePage from "./pages/MobileHomePage/MobileHomePage"
import withRouter from "../../lib/withRouter";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import {observer} from 'mobx-react-lite'
import MobileChat from "./components/MobileChat/MobileChat";
import MobileHeaderBlurContainer from "./components/MobileHeader/MobileHeaderBlurContainer";


export const pages = [
  {name: 'Главная', url: '/', Page: MobileHomePage},
  {name: 'История', url: '/q', Page: MobileHomePage},
  {name: 'Поддержка', url: '/w', Page: MobileHomePage},
  {name: 'Бонусы', url: '/e', Page: MobileHomePage},
]


function Desktop() {

  return <>
    <MobileHeader pages={pages}/>

    <MobileHeaderBlurContainer>

      <div className={styles.pagesContainer}>
        <Pages pages={pages}/>
      </div>

      <MobileChat/>

    </MobileHeaderBlurContainer>

  </>
}

Desktop = observer(Desktop)
Desktop = withCurrentUser(Desktop)
Desktop = withRouter(Desktop)
Desktop = withApollo(Desktop)


ReactDOM.render(
  <Desktop/>,
  document.querySelector('#App')
)



