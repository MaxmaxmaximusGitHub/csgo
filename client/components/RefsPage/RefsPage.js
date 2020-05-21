import css from 'styled-jsx/css'
import Page from "../Widgets/Page"
import { useState } from "react"
import Button from "../Widgets/Button"
import gql from 'graphql-tag'

import {
  useQuery, useSubscription, useMutation, useApolloClient
} from '@apollo/react-hooks'


const MESSAGES = gql`
  {
    messages {
      text
    }
  }
`

const SEND_MESSAGE = gql`
  mutation ($text:String) {
    sendMessage(text:$text)
  }
`


function Handler() {
  const {loading, error, data} = useQuery(MESSAGES, {
    pollInterval: 1000
  })

  if (loading) return 'Loading...'
  if (error) return `Error`

  const {messages} = data

  return <ul>
    { messages.map(message =>
      <li key={ message.text }>{ message.text }</li>
    ) }
  </ul>
}

function Sender() {
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    refetchQueries: [{query: MESSAGES}]
  })

  const ref = React.useRef()

  function send() {
    sendMessage({
      variables: {
        text: ref.current.value
      }
    })
  }

  return <div>
    <input ref={ ref } type="text"/>
    <Button onClick={ send }>Lol</Button>
  </div>
}


export default function RefsPage() {
  return <Page>
    <Handler/>
    <Sender/>
  </Page>
}




