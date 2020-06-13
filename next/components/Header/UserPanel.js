import css from 'styled-jsx/css'
import Button from "../Widgets/Button"
import toMoney from "../../filters/toMoney"
import walletIcon from 'res/images/wallet-icon.svg'
import UserActions from "./UserActions"


export default function UserPanel({user}) {

  const {nickname, avatar, money} = user

  return <div className='user-panel'>
    <Button icon={walletIcon}>Пополнение</Button>

    <div className="user-info">
      <div className="nickname">{nickname}</div>
      <div className="money">{toMoney(money)}</div>
    </div>

    <UserActions/>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .user-panel {
    margin-left 1.5em
    display flex
    flex-direction row
    align-items center
    margin-right 1em

    .user-info {
      margin-left 1em

      .nickname {
        font-size 1em
        white-space nowrap
        max-width 12em
        overflow hidden
      }

      .money {
        color #E6B757
        margin-top 0.3em
        margin-left 0.5em
      }
    }

    .avatar {
      size 2.7em
      margin-left 1em
      border-radius 0.5em
    }

  }
`

