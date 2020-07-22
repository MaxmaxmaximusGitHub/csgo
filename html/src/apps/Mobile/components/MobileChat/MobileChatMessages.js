import styles from './MobileChatMessages.styl'
import {observer} from 'mobx-react-lite'
import List from "../../../../components/List";
import MobileChatMessage from "./MobileChatMessage";


function MobileChatMessages() {

  const messages = [
    {id: 1, text: 'lol'},
    {id: 2, text: 'lol'},
    {id: 3, text: 'lol'},
    {id: 4, text: 'lol'},
    {id: 5, text: 'lol'},
    {id: 6, text: 'lol'},
    {id: 7, text: 'lol'},
    {id: 8, text: 'lol'},
    {id: 9, text: 'lol'},
    {id: 10, text: 'lol'},
    {id: 11, text: 'lol'},
  ]

  return <div className={styles.MobileChatMessages}>
    <List list={messages}>{message =>
      <MobileChatMessage message={message}/>
    }</List>
  </div>
}


export default observer(MobileChatMessages)


