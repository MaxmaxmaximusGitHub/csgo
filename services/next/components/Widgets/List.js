import React, { useState, useEffect, useRef } from 'react'
import css from 'styled-jsx/css'
import classes from "../../lib/classes";


export default function List({children, withoutPadding, ...props}) {

  const listWrapper = classes('list-wrapper', {
    '__without-padding': withoutPadding
  })

  return <div className={ listWrapper }>

    <div className='list' { ...props }>
      { children }
    </div>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .list-wrapper {
    flex-grow 1
    align-self stretch
    padding 0.5em 1em
    padding-bottom 0
    //margin-bottom 3em
    display flex
    flex-direction column
    position relative

    &:before {
      content ''
      display block
      absolute bottom left
      size 100% 3em
      background-image linear-gradient(transparent, #2A2E58)
      z-index 1
      pointer-events none
    }

    &.__without-padding {
      padding 0

      .list {
        padding 0
        padding-bottom 3em
      }
    }

    .list {
      overflow-y auto
      height 0
      flex-grow 1
      margin-right 1em
      padding 0.5em 1em
      padding-bottom 3em
    }
  }
`

