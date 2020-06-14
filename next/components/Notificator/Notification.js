import useTimeout from "../../hooks/useTimeout"
import {useCallback} from "react"
import css from 'styled-jsx/css'


export default function Notification({notification, onClose}) {

  const closeNotification = useCallback(() => {
    onClose(notification)
  }, [onClose, notification])

  const {type, message, time} = notification

  const [stopTimeout, restartTimeout] = useTimeout(
    closeNotification, time
  )

  return <li
    className='notification'
    onClick={closeNotification}
    onMouseEnter={stopTimeout}
    onMouseOut={restartTimeout}>

    {type}: {message}

    <style jsx>{style}</style>
  </li>
}


// language=Stylus
const style = css`
  .notification {
    background-color blue
  }
`
