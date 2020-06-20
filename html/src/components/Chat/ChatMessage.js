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
    className={styles.naruto}
    key={message.id}>
    <button onClick={deleteMessage}>delete</button>
    {message.text}
  </li>
}


