import css from 'styled-jsx/css'
import RightTray from "./RightTray"
import LeftTray from "./LeftTray"
import Nav from "./Nav"


export default function Header() {

  return <header className='header'>
    <LeftTray/>

    <Nav/>

    <RightTray/>

    <style jsx>{style}</style>
  </header>
}


// language=Stylus
const style = css`
  .header {
    height 5em
    width 100%
    display flex
    flex-direction row
    box-sizing border-box
    z-index 1
    flex-shrink 0
  }
`


