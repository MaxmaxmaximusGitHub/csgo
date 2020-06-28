import styles from './DesktopHeader.styl'
import DesktopNav from "./DesktopNav";
import UserPanel from "../UserPanel/UserPanel";


export default function DesktopHeader({pages}) {

  return <div className={styles.header}>
    <DesktopNav pages={pages}/>
    <UserPanel/>
  </div>
}


