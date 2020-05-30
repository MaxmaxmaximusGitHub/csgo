import React, { useState, useEffect, useRef } from 'react'
import css from 'styled-jsx/css'
import classes from "../../lib/classes";
import useSize from "../../hooks/useSize";


export default function Roll({title, children, ...props}) {
  const [active, setActive] = useState(false)

  const [contentRef, contentSize] = useSize('height')
  const rollClasses = classes('roll', {__active: active})

  const wrapperStyles = {
    height: active ? contentSize.height : 0
  }

  function toggleState() {
    setActive(active => !active)
  }


  return <div className={ rollClasses }>

    <h6 className="title" onClick={ toggleState }>{ title }</h6>

    <div className="wrapper" style={ wrapperStyles }>
      <div className="content" ref={ contentRef }>{ children }</div>
    </div>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .roll {
    $time = 0.3s
    background-color rgba(#424879, 0.5)
    margin 0.4em 0
    border-radius 0.5em
    overflow hidden
    transition background-color $time

    &.__active {
      background-color #424879
    }

    .title {
      font-size 1.2em
      padding 0.75em 1em
      cursor pointer

      &:hover {
        background-color #4e558d
      }
    }

    .wrapper {
      transition height 0.5s
      
      .content {
        color #C3C3C3
        padding 0.5em 1em
        overflow hidden
        user-select text
      }
    }
  }
`