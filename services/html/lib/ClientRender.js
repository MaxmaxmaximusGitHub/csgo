import useImmediateEffect from "./useImmediateEffect"
import { useState } from "react"


export default function ClientRender({children}) {
  const [inited, setInited] = useState(false)

  useImmediateEffect(() => setInited(true))
  return inited && children
}
