import styles from "./UserPanel.styl";
import useCurrentUser from "../../hooks/useCurrentUser";
import useConfirm from "../../hooks/useConfirm";
import Button from "../Button";
import useInterval from "../../hooks/useInterval";


export default function UserPanel() {

  const user = useCurrentUser()
  const [confirmLogout] = useConfirm(`Выйти?`, logout)

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
      <Button onClick={login}>login with steam</Button>
    </div>
  }

  return <div className={styles.userPanel}>
    <img className={styles.avatar} src={user.avatar} alt={user.nickname}/>
    <Button onClick={onLogoutClick}>logout</Button>
  </div>
}
