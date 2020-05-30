import useList from "../../hooks/useList"
import Message from "./Message"


export default function Messages() {

  const messages = useList(10, {
    nickname: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    avatar: 'https://sun9-32.userapi.com/c847019/v847019594/c84e1/zsT4P2fn1hg.jpg',
    createdAt: new Date()
  })

  return <ul className='messages'>
    { messages.map(message =>
      <Message message={ message } key={ message.id }/>
    ) }

    { /* language=Stylus */ }
    <style jsx>{ `
			.messages {
				flex-grow 1
				padding 0 1em
				height 0
				overflow auto
			}
    ` }</style>
  </ul>
}

