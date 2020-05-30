import { useEffect, useState } from "react"


export default function ClientRender({children}) {
  const [inited, setInited] = useState(false)

  useEffect(() => setInited(true))
  return inited && children
}
