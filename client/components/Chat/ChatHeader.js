import { useState, useEffect } from "react"
import css from 'styled-jsx/css'
import chatIcon from 'res/images/chat-icon.svg'
import closeChatIcon from 'res/images/close-chat-icon.svg'


export default function ChatHeader() {

  return <div className='chat-header'>

    <div className="left-block">
      <div className="icon"></div>

      <div className="title-block">
        <div className="title">Чат</div>
        <div className="rules">Правила</div>
      </div>
    </div>

    <div className="right-block">
      <div className="status-panel">

        <div className="ping-panel">
          <div className="ping-title">Онлайн - ping</div>
          <div className="ping-value">23</div>
        </div>

        <div className="online-count">2012</div>

      </div>
      <div className="close-button"></div>
    </div>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .chat-header {
    height 4em
    display flex
    padding 0 1em
    flex-direction row
    justify-content space-between
  }
  
  .left-block {
    display flex
    flex-direction row
    align-items center
  }
  
  .icon {
    size 1.9em
    background-image url(${ chatIcon }) 
    background-repeat no-repeat
    background-size contain
    background-position center
    margin-right 0.4em
  }
  
  .title-block {
    text-align center
  }
  
  .title {
    font-size 1em
    text-transform uppercase
  }
  
  .rules {
    color #BE4254
    font-size 0.7em
  }
  
  .right-block {
    display flex
    flex-direction row
  }
  
  .status-panel {
    padding-top 0.7em
    text-align right
  }
  
  .ping-panel {
    display flex
    flex-direction row
    font-size 0.6em
  }
  
  .ping-title {
    color #5A6098
    text-transform uppercase
  }
  
  .ping-value {
    margin-left 0.3em
  }
  
  .online-count {
    color #BE4254
    font-size 1.2em
    margin-top 0.3em
    font-weight 600
    display flex
    flex-direction row
    align-items center
    justify-content flex-end
  }
  
  .online-count:before {
    content '⬤'
    font-size 0.4em
    margin-right 0.7em
  }
  
  .close-button {
    size 2.2em
    border-radius 0.5em
    margin-left 1em
    background-image url(${ closeChatIcon }) 
    background-repeat no-repeat
    background-size contain
    background-position center
    background-origin content-box
    padding 0.4em
    box-sizing border-box
    align-self center
    background-color #2D325C
    cursor pointer
  }
  
  .close-button:hover{
    background-color #4b5486
  }
`

