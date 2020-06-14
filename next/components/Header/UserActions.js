import css from 'styled-jsx/css'
import ActionButton from "./ActionButton"
import notificationIcon from "../../res/images/notification.svg"
import settingsIcon from "../../res/images/settings.svg"
import LogoutButton from "./LogoutButton";


export default function UserActions() {


  return <div className='user-actions'>

    <ActionButton icon={notificationIcon} indicator={true}/>
    <ActionButton icon={settingsIcon}/>
    <LogoutButton/>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .user-actions {
    display flex
    flex-direction row
    margin-left 0.7em
  }
`
