import useCurrentUser from "../hooks/useCurrentUser";
import styles from './Header.styl'


export default function Header() {

  const user = useCurrentUser()

  return <div className={styles.header}>
    <h1>Header</h1>

    {user && <div>
      <img className={styles.avatar} src={user.avatar} alt={user.nickname}/>
      <a href="/auth/logout">logout</a>
    </div>}

    {!user && <div>
      <a href="/auth/steam">steam</a>
    </div>}

  </div>

}

