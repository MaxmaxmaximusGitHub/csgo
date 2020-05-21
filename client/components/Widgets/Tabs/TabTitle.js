import { forwardRef, useImperativeHandle } from 'react'
import css from 'styled-jsx/css'
import classes from "../../../lib/classes"
import useSize from "../../../hooks/useSize"


export default forwardRef(function TabTitle(props, ref) {
  const {active, onClick, children} = props


  return <div
    className={ classes('tab-title', {__active: active}) }
    ref={ ref } onClick={ onClick }>

    <div className="text">{ children }</div>

    <style jsx>{ style }</style>
  </div>
})


// language=Stylus
const style = css`
  .tab-title {
    cursor pointer
    flex-grow 1
    text-align center
    text-transform uppercase
    padding 2em 1em
    //color #b3b7d7
    transition text-shadow 0.5s


    &.__active {
      //text-shadow 0 0 1em rgba(white, 0.7)
    }

  }
`

