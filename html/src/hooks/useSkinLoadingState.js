import useLiveQuery from "./useLiveQuery";
import {GET_ITEMS_DATA_LOADER} from "../graphql/queries";


export default function useSkinLoadingState() {
  const loadingStates = useLiveQuery(GET_ITEMS_DATA_LOADER)
  return loadingStates[0] || {}
}
