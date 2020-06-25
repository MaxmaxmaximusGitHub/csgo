import styles from './ChatMessage.styl'
import {useMutation} from "@apollo/react-hooks";
import {DELETE_MESSAGE} from "../../apps/desktop/graphql/mutations"
import {GET_CHAT_MESSAGES} from '../../apps/desktop/graphql/queries'
import Button from "../Button";


export default function ChatMessage({message}) {

  const [deleteMessage] = useMutation(DELETE_MESSAGE, {
    variables: {id: message.id},
    refetchQueries: [{query: GET_CHAT_MESSAGES}]
  })

  return <li
    className={styles.naruto}
    key={message.id}>
    <Button onClick={deleteMessage}>delete</Button>
    {message.text}
  </li>
}


