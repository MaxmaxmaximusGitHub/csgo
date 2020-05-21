import css from 'styled-jsx/css'
import classes from "../../lib/classes";


export default function Page({children, className}) {

  return <div className={ 'page ' + className || '' }>
    { children }

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .page {
    flex-grow 1
    display flex
    flex-direction row
    justify-content center
    align-items stretch
    border-radius 0 0.5em 0 0
    margin-right 2em
    overflow hidden
    background-image linear-gradient(#232749, #2A2E58)
  }
`


