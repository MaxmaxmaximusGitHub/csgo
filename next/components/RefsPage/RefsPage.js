import css from 'styled-jsx/css'
import Page from "../Widgets/Page"
import { useState } from "react"
import Button from "../Widgets/Button"
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import useLiveQuery from "../../lib/useLiveQuery"


const GET_MESSAGES = gql`
  {
    message(order_by: {id: asc}) {
      id
      text
    }
  }
`


const DELETE_MESSAGE = gql`
  mutation ($id: Int!) {
    delete_message_by_pk(id: $id) {
      id
    }
  }
`

const SEND_MESSAGE = gql`
  mutation ($text: String){
    insert_message_one(object: {text: $text}) {
      id text
    }
  }
`

function MessagesInput() {
  const [sendMessage] = useMutation(SEND_MESSAGE)

  function onSubmit(event) {
    if (event.key !== 'Enter') return
    const text = event.target.value
    event.target.value = ''
    sendMessage({
      variables: {text},
      refetchQueries: [{query: GET_MESSAGES}]
    })
  }

  return <input type="text" onKeyDown={ onSubmit }/>
}


function DeleteButton({id}) {
  const [deleteMessage] = useMutation(DELETE_MESSAGE)

  function onClick() {
    deleteMessage({
      variables: {id},
      refetchQueries: [{query: GET_MESSAGES}]
    })
  }

  return <Button onClick={ onClick }>Delete { id }</Button>
}


function MessagesList() {
  const {loading, error, data} = useLiveQuery(GET_MESSAGES)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error { error.message }...</div>

  return <ul>
    { data.message.map(message =>
      <li key={ message.id }>
        <DeleteButton id={ message.id }/>
        <span>{ message.text }</span>
      </li>
    ) }
  </ul>
}


// const CURRENT_USER = gql`
//   {
//     current_user {
//       id
//       name
//     }
//   }
// `
const CURRENT_USER = gql`
  query {
    me(args:{user_id:7}){
      id
      name
    }
  }
`

function CurrentUser() {
  const {loading, error, data} = useLiveQuery(CURRENT_USER)

  if (loading) return 'Loading...'
  if (error) return `Error... ${ error.message }`

  // const user = data['me'][0]
  // console.log('user', user)

  return <div style={ {fontSize: 30} }>
    {/*id { user.id }, name { user.name }*/ }
  </div>
}


export default function RefsPage() {

  return <Page>
    <div>
      <div>
        <CurrentUser/>
      </div>
      <MessagesInput/>
      <MessagesList/>
    </div>
  </Page>
}


