import useLiveQuery from "./useLiveQuery";
import {GET_ACTIVE_ROUND} from "../graphql/queries";


export default function useActiveRound() {
  const activeRounds = useLiveQuery(GET_ACTIVE_ROUND)
  return activeRounds[0] || null
}

