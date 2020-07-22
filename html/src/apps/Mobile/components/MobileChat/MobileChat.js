import styles from './MobileChat.styl'
import {observer} from 'mobx-react-lite'
import MobileChatButton from "./MobileChatButton";
import MobileChatContent from "./MobileChatContent";


function MobileChat() {

  return <div className={styles.MobileChat}>
    <MobileChatButton/>
    <MobileChatContent/>
  </div>
}


export default observer(MobileChat)


