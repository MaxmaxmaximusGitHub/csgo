import gql from "graphql-tag"
import {createContext} from "react"
import useLiveQuery from "../hooks/useLiveQuery"


export const CURRENT_USER_QUERY = gql`
  query {
    current_user {
      id
      created_at
      updated_at
      role
      steam_profile
      steam_id
      nickname
      avatar
      lang
      money
    }
  }
`

export const CurrentUserContext = createContext(null)


export default function withCurrentUser(Component) {

  function WithCurrentUser(props) {
    const {data} = useLiveQuery(CURRENT_USER_QUERY)

    const currentUser = data && data['current_user'][0]
      ? data['current_user'][0]
      : null

    return <CurrentUserContext.Provider value={currentUser}>
      <Component {...props}/>
    </CurrentUserContext.Provider>
  }

  WithCurrentUser.displayName = `WithCurrentUser(${Component.name})`

  return WithCurrentUser
}

