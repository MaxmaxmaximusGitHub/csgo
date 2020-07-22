import styles from './MobileChatHeader.styl'
import {observer} from 'mobx-react-lite'


function MobileChatHeader() {

  return <div className={styles.MobileChatHeader}>

    <div className={styles.onlineUsers}>
      <div className={styles.onlineUsersIcon}></div>
      <div className={styles.onlineUsersCount}>431</div>
    </div>

  </div>
}


export default observer(MobileChatHeader)


