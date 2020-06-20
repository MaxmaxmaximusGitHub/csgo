import {GET_CHAT_MESSAGES} from "../../graphql/queries"
import {SEND_MESSAGE} from '../../graphql/mutations'
import {useMutation} from "@apollo/react-hooks"
import useInput from "../../hooks/useInput"


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
    <button onClick={sendMessage}>Отправить</button>
  </div>
}

