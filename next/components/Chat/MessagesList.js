import useList from "../../hooks/useList"
import Message from "./Message"
import gql from "graphql-tag";
import useLiveQuery from "../../hooks/useLiveQuery"


const MESSAGES = gql`
  query {
    message (limit: 2) {
      text
      author {
        nickname
        messages (limit: 3) {
          text
          author {
            nickname
            messages{
              author {
                avatar
              }
            }
          }
        }
      }
    }
  }
`


export default function Messages() {
  //
  // const {loading, error, data} = useLiveQuery(MESSAGES)
  //
  // if (loading) return "Loading..."
  // if (error) return `Error ${error.message}...`
  //
  // // console.log(data)
  //
  //
  // const messages = useList(10, {
  //   nickname: 'Lorem ipsum',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   avatar: 'https://sun9-32.userapi.com/c847019/v847019594/c84e1/zsT4P2fn1hg.jpg',
  //   createdAt: new Date()
  // })

  return <ul className='messages'>
    {/*{messages.map(message =>*/}
    {/*  <Message message={message} key={message.id}/>*/}
    {/*)}*/}

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

