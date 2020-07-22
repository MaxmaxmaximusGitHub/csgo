import useLiveQuery from "./useLiveQuery";
import {GET_MY_ITEMS} from "../graphql/queries";
import BetController from "../controllers/BetsController";


export default function useMyItems() {

  const items =  useLiveQuery(GET_MY_ITEMS, {
    cursor: {prop: 'created_at'},
  })

  return items.filter(item=>{
    return !BetController.hasItem(item)
  })
}


