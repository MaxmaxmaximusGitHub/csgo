import styles from './MobileChatButton.styl'
import {observer} from 'mobx-react-lite'
import ChatController from "../../../../controllers/ChatController";
import classNames from 'classnames'


function MobileChatButton() {

  const {opened, toggle} = ChatController

  const className = classNames(styles.MobileChatButton, {
    [styles.__opened]: opened
  })

  return <div
    className={className}
    onClick={toggle}>

    <div className={styles.arrowIcon}></div>
  </div>
}


export default observer(MobileChatButton)


