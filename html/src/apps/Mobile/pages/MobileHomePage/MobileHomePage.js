import styles from './MobileHomePage.styl'
import {observer} from 'mobx-react-lite'
import MobileGame from "../../components/MobileGame/MobileGame";


function MobileHomePage() {

  return <div className={styles.MobileHomePage}>
    <MobileGame/>
  </div>
}


export default observer(MobileHomePage)


