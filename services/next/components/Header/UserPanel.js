import css from 'styled-jsx/css'
import Button from "../Widgets/Button"
import toMoney from "../../lib/filters/toMoney"
import steamIcon from 'res/images/steam.svg'
import walletIcon from 'res/images/wallet-icon.svg'
import UserActions from "./UserActions";



export default function UserPanel() {

  const user = {
    nickname: 'Lorem ipsum',
    avatar: 'https://sun9-32.userapi.com/c847019/v847019594/c84e1/zsT4P2fn1hg.jpg',
    balance: 123
  }

  if (!user) {
    return <div className='user-panel'>
      <Button icon={ steamIcon }>Войти через стим</Button>
      <style jsx>{ style }</style>
    </div>
  }


  const {nickname, avatar, balance} = user

  return <div className='user-panel'>
    <Button icon={ walletIcon }>Пополнение</Button>

    <div className="user-info">
      <div className="nickname">{ nickname }</div>
      <div className="balance">{ toMoney(balance) }</div>
    </div>


    <UserActions/>

    <style jsx>{ style }</style>
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
      }

      .balance {
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

