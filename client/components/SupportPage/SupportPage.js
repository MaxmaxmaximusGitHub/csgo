import React, { useState, useEffect } from 'react'
import FAQ from "./FAQ";
import css from 'styled-jsx/css'
import Page from "../Widgets/Page"
import TermsOfUse from "./TermsOfUse"
import Tab from "../Widgets/Tabs/Tab"
import Tabs from "../Widgets/Tabs/Tabs"
import Contacts from "./Contacts";
import Tickets from "./Tickets/Tickets";


export default function SupportPage() {

  return <Page>

    <div className="container">
      <Tabs>
        <Tab title='Тикеты'> <FAQ/> </Tab>
        <Tab title='Faq'> <FAQ/> </Tab>
        <Tab title='Пользовательское соглашение'> <TermsOfUse/> </Tab>
        <Tab title='Контакты'> <Contacts/> </Tab>
      </Tabs>
    </div>

    <style jsx>{ style }</style>
  </Page>
}


// language=Stylus
const style = css`
  .container {
    flex-grow 1
    margin-left 2em
  }
`

