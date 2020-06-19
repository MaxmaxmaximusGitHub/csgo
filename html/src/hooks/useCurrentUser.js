import {useContext} from "react"
import useLiveQuery from "./useLiveQuery";
import {GET_CURRENT_USER} from "../graphql/queries";
import {CurrentUserContext} from '../lib/withCurrentUser'


export default function useCurrentUser() {
  return useContext(CurrentUserContext)
}
