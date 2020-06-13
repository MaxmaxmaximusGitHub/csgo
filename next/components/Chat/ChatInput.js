import css from 'styled-jsx/css'
import sendMessageIcon from 'res/images/send-message-icon.svg'
import gql from "graphql-tag"
import {useMutation} from "@apollo/react-hooks";
import useInput from 'react-use-input'
import useCurrentUser from "../../hooks/useCurrentUser"
import {QUERY_CHAT_MESSAGES} from "./ChatMessages"


const SEND_CHAT_MESSAGE = gql`
  mutation ($text: String!) {
    sendChatMessage(text: $text) {
      id
    }
  }
`


export default function ChatInput() {

  const [text, onTextChange, setText] = useInput()

  const [sendChatMessage] = useMutation(SEND_CHAT_MESSAGE, {
    variables: {text: text},
    refetchQueries: [{query: QUERY_CHAT_MESSAGES}],
    onCompleted: resetInput
  })

  function resetInput() {
    setText('')
  }

  function onInputKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      sendChatMessage()
    }
  }


  return <form className='chat-input'>
    <input
      className='input'
      value={text}
      onChange={onTextChange}
      onKeyDown={onInputKeyDown}
      placeholder='Написать сообщение...'
    />

    <div
      className='send-button'
      onClick={sendChatMessage}>
    </div>

    <style jsx>{style}</style>
  </form>
}


// language=Stylus
const style = css`
  .chat-input {
    background-color #353B6A
    margin 1em
    border-radius 0.5em
    overflow hidden
    display flex
    flex-direction row
    height 3em
    
    .input {
        background-color transparent
        border none
        outline none
        flex-grow 1
        color white
        padding 0 1em
    }
    
    .send-button{
      border none
      outline none
      cursor pointer
      background-color transparent
      width 3em
      background-repeat no-repeat
      background-position center
      background-size cover
      background-origin content-box
      background-image url(${sendMessageIcon})
      padding 0.5em
      padding-right 1em
    }
  }
`

