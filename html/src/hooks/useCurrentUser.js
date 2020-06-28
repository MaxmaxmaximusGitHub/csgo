import {useContext} from "react"
import {CurrentUserContext} from '../lib/withCurrentUser'


export default function useCurrentUser() {
  return useContext(CurrentUserContext)
}
