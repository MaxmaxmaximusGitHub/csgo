import styles from './Header.styl'
import Nav from "./Nav";
import UserPanel from "../../../components/UserPanel/UserPanel";



export default function Header() {

  return <div className={styles.header}>
    <Nav/>
    <UserPanel/>
  </div>

}

