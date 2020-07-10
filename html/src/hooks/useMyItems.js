import useLiveQuery from "./useLiveQuery";
import {GET_MY_ITEMS} from "../graphql/queries";


export default function useMyItems(search = '') {

  return useLiveQuery(GET_MY_ITEMS, {
    cursor: {prop: 'created_at'},
    variables: {search: `%${search}%`}
  })
}


