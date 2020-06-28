import useLiveQuery from "./useLiveQuery";
import {GET_SKINS_LOADER_STATE} from "../graphql/queries";


export default function useSkinLoadingState() {
  const loadingStates = useLiveQuery(GET_SKINS_LOADER_STATE)
  return loadingStates[0] || {}
}
