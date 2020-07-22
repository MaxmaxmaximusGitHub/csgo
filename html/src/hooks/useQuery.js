import {useQuery as apolloUseQuery} from "@apollo/react-hooks";
import ReactiveList from "../lib/ReactiveList";


export default function useQuery(query, options = {}) {
  const queryResult = apolloUseQuery(query, options)
  return wrapQueryResult(queryResult, options)
}


function wrapQueryResult(queryResult, options) {
  return new ReactiveList(0, queryResult, options)
}




