import css from 'styled-jsx/css'
import {useCallback, useEffect, useState} from "react";
import Notification from "./Notification";


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

  if (options.time == null) {
    options.time = 3000
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
    return () => {
      unregisterHandler(addNotification)
    }
  }, [addNotification, registerHandler, unregisterHandler]);


  return <div className='notificator'>
    Notificator

    <ul>
      {notifications.map(notification =>
        <Notification
          key={notification.id}
          notification={notification}
          onClose={onNotificationClose}
        />
      )}
    </ul>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .notificator {
    background-color red
    absolute top left
    size 40% 50%
    z-index 999
  }
`
