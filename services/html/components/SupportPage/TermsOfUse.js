import React, { useState, useEffect, useRef } from 'react'
import css from 'styled-jsx/css'
import List from "../Widgets/List"
import useRepeat from "../../hooks/useRepeat"


export default function TermsOfUse() {

  return <List style={ {
    padding: '1em 7em',
    margin: '0.5em 1em'
  } }>

    { useRepeat(20, (index) => {

      return <div key={index}>
        <h5>Лва</h5>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur
          sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    }) }

    <style jsx>{ style }</style>
  </List>

}


// language=Stylus
const style = css`

  h5 {
    color #FFFFFF
    font-size 2em
    margin-top 1.5em
  }

  p {
    color #C3C3C3
    margin-top 1.5em
  }
`


