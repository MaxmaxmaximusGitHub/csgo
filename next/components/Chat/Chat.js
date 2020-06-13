import React from "react"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
import ChatHeader from "./ChatHeader"
import css from 'styled-jsx/css'


export default function Chat() {

  return <div className='chat'>
    <ChatHeader/>

    <div className='content-panel'>
      <ChatMessages/>
      <ChatInput/>
    </div>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .chat {
    flex-shrink 0
    width 22em
    display flex
    flex-direction column
    background-image linear-gradient(#393D72, transparent) 
    //background-image linear-gradient(#232749, #2A2E58)
    //background-image linear-gradient(#262b53, transparent)
    border-top-left-radius 0.5em
    box-sizing border-box
    overflow hidden
    user-select text
  }

  .content-panel {
    flex-grow 1
    border-top-left-radius 0.5em
    //background-image linear-gradient(#464b88, #2A2E58)
    background-image linear-gradient(#464b88, transparent)
    display flex
    flex-direction column
    position relative
  }

`

