import {GET_CURRENT_USER} from "../graphql/queries";
import useLiveQuery from "../hooks/useLiveQuery";


export const CurrentUserContext = React.createContext(null)


export default function withCurrentUser(Component) {

  function WithCurrentUser(props) {
    const users = useLiveQuery(GET_CURRENT_USER)
    const user = users[0] || null

    return <CurrentUserContext.Provider value={user}>
      <Component {...props}/>
    </CurrentUserContext.Provider>
  }


  WithCurrentUser.displayName = `WithCurrentUser(${
    Component.displayName || Component.name || 'Component'
  })`


  return WithCurrentUser
}

