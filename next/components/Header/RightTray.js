import css from 'styled-jsx/css'
import SocialNetworks from "./SocialNetworks"
import UserPanel from "./UserPanel"
import LoginButton from "./LogignButton"
import useCurrentUser from "../../hooks/useCurrentUser"


export default function RightTray() {

  const user = useCurrentUser()

  return <div className='right-tray'>
    <SocialNetworks/>

    {user && <UserPanel user={user}/>}
    {!user && <LoginButton/>}

    <style jsx>{style}</style>
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

