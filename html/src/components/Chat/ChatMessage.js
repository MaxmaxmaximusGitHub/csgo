import styles from './ChatMessage.styl'
import {useMutation} from "@apollo/react-hooks";
import {DELETE_MESSAGE} from "../../graphql/mutations"
import {GET_CHAT_MESSAGES} from '../../graphql/queries'


export default function ChatMessage({message}) {

  const [deleteMessage] = useMutation(DELETE_MESSAGE, {
    variables: {id: message.id},
    refetchQueries: [{query: GET_CHAT_MESSAGES}]
  })

  return <li
    key={message.id}
    className={styles.message}>
    <button onClick={deleteMessage}>delete</button>
    {message.text}
  </li>
}


