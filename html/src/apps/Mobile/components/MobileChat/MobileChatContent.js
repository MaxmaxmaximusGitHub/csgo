import styles from './MobileChatContent.styl'
import ChatController from "../../../../controllers/ChatController";
import {observer} from 'mobx-react-lite'
import classNames from "classnames";
import MobileChatHeader from "./MobileChatHeader";
import MobileChatMessages from "./MobileChatMessages";


function MobileChatContent() {

  const {opened} = ChatController

  const className = classNames(styles.MobileChatContent, {
    [styles.__opened]: opened
  })

  return <div className={className}>
    <MobileChatHeader/>
    <MobileChatMessages/>
  </div>
}


export default observer(MobileChatContent)


