import styles from './MobileChatMessage.styl'
import {observer} from 'mobx-react-lite'


function MobileChatMessage() {

  return <li className={styles.MobileChatMessage}>
    MobileChatMessage
  </li>
}


export default observer(MobileChatMessage)


