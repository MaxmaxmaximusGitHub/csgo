import {useEffect, useRef, useState} from "react";


export default function useTimeout(handler, time) {

  const [started, setStarted] = useState(true)
  const [restartSessionId, setRestartSessionId] = useState(0)
  const handlerRef = useRef(handler)

  function stopTimeout() {
    setStarted(false)
  }

  function restartTimeout() {
    setStarted(true)
    setRestartSessionId(restartSessionId => restartSessionId + 1)
  }

  // update handler
  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  // start timeout
  useEffect(() => {
    if (!started) {
      return
    }

    const id = setTimeout(() => {
      handlerRef.current()
    }, time)

    return () => {
      clearTimeout(id)
    }
  }, [time, started, restartSessionId])

  return [stopTimeout, restartTimeout]
}

