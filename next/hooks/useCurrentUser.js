import {CurrentUserContext} from '../lib/withCurrentUser'
import {useContext} from "react"


export default function useCurrentUser() {
  return useContext(CurrentUserContext)
}
