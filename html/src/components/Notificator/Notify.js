import styles from './Notify.styl'
import classNames from 'classnames'
import useTimeout from "../../hooks/useTimeout"


export default function Notify({notification, onClose}) {

  const closeNotification = useCallback(() => {
    onClose(notification)
  }, [onClose, notification])

  const {type, message, time = 2500} = notification

  const [stopTimeout, restartTimeout] = useTimeout(
    closeNotification, time
  )

  const notificationClassNames = classNames(
    styles.notification, {
      [styles.__error]: type === 'error',
      [styles.__alert]: type === 'alert',
    }
  )


  return <li
    className={notificationClassNames}
    onClick={closeNotification}
    onMouseEnter={stopTimeout}
    onMouseOut={restartTimeout}>

    <div className={styles.message}>{message}</div>
  </li>
}

