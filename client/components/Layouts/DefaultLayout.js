import css from 'styled-jsx/css'
import Header from "../Header/Header"
import Chat from "../Chat/Chat"
import React from 'react'
import useRepeat from "../../hooks/useRepeat"


export default React.memo(function DefaultLayout({children}) {

  return <div className='default-layout'>
    <Header className='loolfd'/>

    <div className='content'>
      { children }
      <Chat/>
    </div>

    <style jsx>{ style }</style>
  </div>
})


// language=Stylus
const style = css`
  .default-layout {
    display flex
    flex-direction column
    background-image linear-gradient(#2F3364, #2A2E58)
    height 100%
  }

  .content {
    overflow hidden
    display flex
    flex-direction row
    height calc(100% - 5em)
  }
`
