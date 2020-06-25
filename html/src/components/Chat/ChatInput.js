import {GET_CHAT_MESSAGES} from "../../apps/desktop/graphql/queries"
import {SEND_MESSAGE} from '../../apps/desktop/graphql/mutations'
import {useMutation} from "@apollo/react-hooks"
import useInput from "../../hooks/useInput"
import Button from "../Button";


export default function ChatInput() {
  const [text, setText] = useInput()

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    variables: {text},
    refetchQueries: [{query: GET_CHAT_MESSAGES}],
    onCompleted() {
      setText('')
    }
  })

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  return <div>
    <input type="text" value={text}
           onKeyDown={onKeyDown}
           onChange={setText}/>
    <Button onClick={sendMessage}>Отправить</Button>
  </div>
}

