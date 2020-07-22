import styles from './DesktopHeader.styl'
import DesktopNav from "./DesktopNav";
import DesktopUserPanel from "../DesktopUserPanel/DesktopUserPanel";


export default function DesktopHeader({pages}) {

  return <div className={styles.DesktopHeader}>
    <DesktopNav pages={pages}/>
    <DesktopUserPanel/>
  </div>
}


