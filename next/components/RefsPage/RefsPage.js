import gql from "graphql-tag"
import Page from "../Widgets/Page"
import Button from "../Widgets/Button"
import {useMutation} from "@apollo/react-hooks"
import useCurrentUser from "../../hooks/useCurrentUser"
import {useEffect, useState} from "react";
import {CURRENT_USER_QUERY} from "../../lib/withCurrentUser";
import useLiveQuery from "../../hooks/useLiveQuery";
import useNotificator from "../../hooks/useNotificator";

const MONEY_PLUS_MUTATION = gql`
  mutation ($id: Int!) {
    moneyPlus(id: $id){
      money
    }
  }
`


function User({user}) {

  const [moneyPlus] = useMutation(MONEY_PLUS_MUTATION, {
    variables: {id: user ? user.id : null},
    refetchQueries: [
      {query: CURRENT_USER_QUERY},
      {query: QUERY_USERS}
    ],
  })

  return <li>
    User: {user && user.money}

    <Button onClick={moneyPlus}>plus</Button>
  </li>
}


const QUERY_USERS = gql`
  query {
    user (order_by: [{id: asc}]) {
      id
      money
      nickname
    }
  }
`

function Users() {
  const {data} = useLiveQuery(QUERY_USERS)

  return <ul>
    {data && data.user.map(user =>
      <User key={user.id} user={user}/>
    )}
  </ul>
}


export default function RefsPage() {

  const {alert, error} = useNotificator()

  function onClick() {
    alert('Lol')
  }

  return <Page>
    <Users/>

    <Button onClick={onClick}>alert</Button>
  </Page>
}


