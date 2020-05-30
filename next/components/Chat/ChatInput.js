import css from 'styled-jsx/css'
import sendMessageIcon from 'res/images/send-message-icon.svg'


export default function ChatInput() {

  return <form className='input-panel'>
    <input className='input' type="text"
           placeholder='Написать сообщение...'/>

    <button className='send-button'></button>

    <style jsx>{ style }</style>
  </form>
}


// language=Stylus
const style = css`

.input-panel {
  background-color #353B6A
  margin 1em
  border-radius 0.5em
  overflow hidden
  display flex
  flex-direction row
  height 3em
}

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
  background-image url(${ sendMessageIcon })
  padding 0.5em
  padding-right 1em
}
`

