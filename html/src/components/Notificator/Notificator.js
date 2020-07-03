import style from './Notificator.styl'
import Notify from "./Notify";

const NOTIFICATOR_HANDLERS = []


function registerHandler(handler) {
  NOTIFICATOR_HANDLERS.push(handler)
}

function unregisterHandler(handler) {
  NOTIFICATOR_HANDLERS.splice(NOTIFICATOR_HANDLERS.indexOf(handler), 1)
}

var lastNotificationId = 0

function createNotification(type, options) {
  if (typeof options === 'string') {
    options = {message: options}
  }

  return {
    ...options,
    type: type,
    id: lastNotificationId++,
  }
}


export const NOTIFICATOR_CONTROLLER = {
  alert(options) {
    NOTIFICATOR_HANDLERS.forEach(handler => {
      handler(createNotification('alert', options))
    })
  },

  error(options) {
    NOTIFICATOR_HANDLERS.forEach(handler => {
      handler(createNotification('error', options))
    })
  },
}


export default function Notificator() {

  const [notifications, setNotifications] = useState([])

  const addNotification = useCallback(notification => {
    setNotifications([...notifications, notification])
  }, [setNotifications, notifications])

  const onNotificationClose = (notification) => {
    setNotifications(notifications => {
      return notifications.filter(_notification => {
        return _notification !== notification
      })
    })
  }

  useEffect(() => {
    registerHandler(addNotification)
    return () => unregisterHandler(addNotification)
  }, [addNotification, registerHandler, unregisterHandler]);


  return <div className={style.notificator}>

    <ul className={style.notifications}>
      {notifications.map(notification =>
        <Notify
          key={notification.id}
          notification={notification}
          onClose={onNotificationClose}
        />
      )}
    </ul>
  </div>
}

