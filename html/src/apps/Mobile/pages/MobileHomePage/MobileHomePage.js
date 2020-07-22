import styles from './MobileHomePage.styl'
import {observer} from 'mobx-react-lite'


function MobileHomePage() {

  return <div className={styles.MobileHomePage}>
    <div>MobileHomePage</div>
    <div>MobileHomePage</div>
    <div>MobileHomePage</div>
    <div>MobileHomePage</div>
  </div>
}


export default observer(MobileHomePage)


