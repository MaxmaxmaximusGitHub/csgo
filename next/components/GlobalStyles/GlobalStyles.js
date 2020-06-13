import React from 'react'
import GlobalReset from './GlobalReset'
import GlobalFonts from "./GlobalFonts"
import GlobalScrollbars from "./GlobalScrollbars"
import GlobalFontSize from "./GlobalFontSize"


export default React.memo(function GlobalStyles() {


  return <>
    <GlobalReset/>
    <GlobalFonts/>
    <GlobalFontSize/>
    <GlobalScrollbars/>

    { /* language=Stylus */}
    <style jsx global>{`
      html, body {
        size 100%
        overflow hidden
      }

      body {
        color white
        font-family "Gotham Pro"
        scroll-behavior smooth
        user-select none
      }

      a {
        color inherit
      }

      input {
        border none
        outline none
      }

      * {
        box-sizing border-box
      }

      #__next {
        size 100%
      }
    `}</style>
  </>

})


