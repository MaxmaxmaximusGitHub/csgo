import styles from './Chat.styl'
import useLiveQuery from "../../hooks/useLiveQuery";
import {GET_CHAT_MESSAGES} from "../../apps/desktop/graphql/queries";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";


export default function Chat() {
  const {data, loading, error} = useLiveQuery(GET_CHAT_MESSAGES)

  return <div>
    <h1>Chat</h1>

    <ul className={styles.messages}>
      {data && data.chat_message.map(message => (
        <ChatMessage key={message.id} message={message}/>
      ))}
    </ul>

    <ChatInput/>

  </div>
}


