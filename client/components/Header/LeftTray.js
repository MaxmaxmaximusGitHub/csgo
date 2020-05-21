import css from 'styled-jsx/css'
import ActionButton from "./ActionButton"
import volumeIcon from 'res/images/volume.svg'
import LangSelect from "./LangSelect"


export default function LeftTray() {

  return <div className='left-tray'>

    <LangSelect/>
    <ActionButton icon={ volumeIcon } bg={ false }/>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .left-tray {
    width 25em
    background-color #232749
    flex-shrink 0
    display flex
    flex-direction row
    align-items center
    justify-content flex-end
    padding-bottom 1em
    padding-right 1.5em 
    box-sizing border-box
  }
`