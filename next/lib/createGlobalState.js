import {useEffect, useState} from "react"


export default function createGlobalState(initValue) {

  const handlers = []

  return () => {
    const [value, handler] = useState(initValue)

    useEffect(() => {
      handlers.push(handler)
      return () => handlers.splice(handlers.indexOf(handler), 1)
    }, [])

    return [value, (value) => {
      initValue = value
      handlers.forEach(handler => handler(value))
    }]
  }
}

