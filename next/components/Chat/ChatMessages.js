import useList from "../../hooks/useList"
import ChatMessage from "./ChatMessage"
import gql from "graphql-tag";
import useLiveQuery from "../../hooks/useLiveQuery"
import toReverse from "../../filters/toReverse";


export const QUERY_CHAT_MESSAGES = gql`
  query {
    chat_message (order_by: [{id: desc}]) {
      id
      text
      created_at
      author {
        id
        nickname
        avatar
      }
    }
  }
`

export default function Messages() {

  const {data} = useLiveQuery(QUERY_CHAT_MESSAGES)

  return <ul className='messages'>
    {data && toReverse(data['chat_message']).map(message =>
      <ChatMessage message={message} key={message.id}/>
    )}

    { /* language=Stylus */}
    <style jsx>{`
      .messages {
        flex-grow 1
        padding 0 1em
        height 0
        overflow auto
      }
    `}</style>
  </ul>
}

