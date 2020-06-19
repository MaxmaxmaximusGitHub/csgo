import {GET_CURRENT_USER} from "../graphql/queries";
import useLiveQuery from "../hooks/useLiveQuery";
import {useRef, useState} from 'react'


export const CurrentUserContext = React.createContext(null)


export default function withCurrentUser(Component) {

  function WithCurrentUser(props) {
    const {data, loading, error} = useLiveQuery(GET_CURRENT_USER)

    if (error) {
      console.error(error)
      return null
    }

    if (loading) {
      return null
    }

    const user = data['current_user'][0] || null

    return <CurrentUserContext.Provider value={user}>
      <Component {...props}/>
    </CurrentUserContext.Provider>
  }


  WithCurrentUser.displayName = `WithCurrentUser(${
    Component.displayName || Component.name || 'Component'
  })`


  return WithCurrentUser
}

