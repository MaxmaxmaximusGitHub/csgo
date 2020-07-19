import styles from "./UserPanel.styl";
import useCurrentUser from "../../hooks/useCurrentUser";
import useConfirm from "../../hooks/useConfirm";
import Button from "../Button";
import useInterval from "../../hooks/useInterval";
import toMoney from "../../filters/toMoney";
import {useMutation} from "@apollo/react-hooks";
import {MONEY_MINUS, MONEY_PLUS} from "../../graphql/mutations";
import {GET_CURRENT_USER} from "../../graphql/queries";


export default function UserPanel() {

  const user = useCurrentUser()

  const [confirmLogout] = useConfirm(`Выйти?`, logout)

  const [moneyMinus] = useMutation(MONEY_MINUS, {
    refetchQueries: [{query: GET_CURRENT_USER}]
  })

  const [moneyPlus] = useMutation(MONEY_PLUS, {
    refetchQueries: [{query: GET_CURRENT_USER}]
  })


  function logout() {
    location.href = '/auth/logout'
  }

  function login() {
    location.href = '/auth/steam'
  }

  function onLogoutClick(event) {
    event.preventDefault()
    event.stopPropagation()
    confirmLogout()
  }

  if (!user) {
    return <div className={styles.userPanel}>
      <Button onClick={login}>Войти через Steam</Button>
    </div>
  }


  const {money, avatar, nickname} = user

  return <div className={styles.userPanel}>
    <Button onClick={moneyMinus}>-</Button>
    <div className={styles.money}>{toMoney(money)}</div>
    <Button onClick={moneyPlus}>+</Button>

    <img className={styles.avatar} src={avatar} alt={nickname}/>
    <Button onClick={onLogoutClick}>logout</Button>
  </div>
}
