import css from 'styled-jsx/css'
import SocialNetworks from "./SocialNetworks"
import UserPanel from "./UserPanel"


export default function RightTray() {

  return <div className='right-tray'>
    <SocialNetworks/>
    <UserPanel/>
    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .right-tray {
    margin-bottom 1em
    display flex
    flex-direction row
    align-items center
    flex-shrink 0
  }
`

