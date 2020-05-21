import React from 'react'
import useFontSize from "../../hooks/useFontSize"


export default React.memo(function GlobalFontSize() {

  const fontSize = useFontSize()

  // language=Stylus
  return <style jsx global>{ `
		body {
		  font-size ${ fontSize }px
		}
  ` }</style>

})

