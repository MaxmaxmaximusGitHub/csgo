import {useEffect, useRef} from 'react'


export default function useInterval(handler, time) {

  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    if (time == null) {
      return
    }

    let id = setInterval(() => {
      handlerRef.current()
    }, time)

    return () => clearInterval(id)
  }, [time])

}


