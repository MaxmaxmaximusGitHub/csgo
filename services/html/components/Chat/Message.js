import css from 'styled-jsx/css'
import toDate from "../../lib/filters/toDate"
import ClientRender from "../../lib/ClientRender"
import useImmediateEffect from "../../lib/useImmediateEffect"


export default function Message({message: {avatar, nickname, text, createdAt}}) {

  return <li className='message'>

    <div className="message-content">

      <div className="info-row">
        <div className="nickname">{ nickname }</div>
        <div className="time">
          <ClientRender>{ toDate(createdAt, "h:MM") }</ClientRender>
        </div>
      </div>

      <div className="text">{ text }</div>
    </div>

    <style jsx>{ style }</style>
  </li>
}


// language=Stylus
const style = css`
  .message {
    display flex
    flex-direction row
    margin-top 1em

    .avatar {
      size 2.6em
      flex-shrink 0
      border-radius 0.5em
      margin-right 1em
      object-fit cover
      background-color red
    }

    .message-content {
      flex-grow 1
    }

    .info-row {
      display flex
      flex-direction row
      padding 0.3em 0
    }

    .nickname {
      color white
      font-size 1.1em
      flex-grow 1
    }

    .time {
      color #C3C3C3
    }

    .text {
      padding 0.5em
      font-size 0.9em
      //background-color rgba(#363b62, 0.3)
      background-color rgba(white, 0.05)
      color #C3C3C3
      border-radius 0 0.5em 0.5em 0.5em
    }
  }
`


