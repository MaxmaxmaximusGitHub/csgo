import gql from "graphql-tag"
import Page from "../Widgets/Page"
import Button from "../Widgets/Button"
import {useMutation} from "@apollo/react-hooks"
import useCurrentUser from "../../hooks/useCurrentUser"
import {useEffect, useState} from "react";
import {CURRENT_USER_QUERY} from "../../lib/withCurrentUser";

const MONEY_PLUS_MUTATION = gql`
  mutation ($id: Int!) {
    moneyPlus(id: $id){
      money
    }
  }
`


function Lol() {
  const user = useCurrentUser()

  const [moneyPlus] = useMutation(MONEY_PLUS_MUTATION, {
    variables: {id: user ? user.id : null},
    refetchQueries: [{query: CURRENT_USER_QUERY}]
  })

  return <h1>
    Lol: {user && user.money}

    <Button onClick={moneyPlus}>plus</Button>
  </h1>
}


export default function RefsPage() {

  const [state, setState] = useState(false)


  return <Page>
    <div onClick={() => setState(!state)}>
      <Lol/>
      <Lol/>
      <Lol/>
      {state && <Lol/>}
    </div>
  </Page>
}


