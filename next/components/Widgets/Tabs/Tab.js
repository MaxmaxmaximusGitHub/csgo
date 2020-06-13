import React from 'react'
import classes from "../../../lib/classes"
import css from 'styled-jsx/css'


export default function Tab(props) {
  const {prev, next, active, children} = props

  const tabClass = classes('tab', {
    __prev: prev,
    __next: next,
    __active: active,
  })

  return <div className={tabClass}>
    {children}
    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .tab {
    $time = 0.4s
    absolute top left
    transition transform $time, opacity $time
    opacity 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    size 100%

    &.__prev {
      transform translateX(-10em)
      pointer-events none
    }

    &.__next {
      transform translateX(10em)
      pointer-events none
    }

    &.__active {
      opacity 1
      z-index 2
    }

  }
`



