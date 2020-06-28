import useLiveQuery from "./useLiveQuery";
import {GET_ACTIVE_ROUNDS} from "../graphql/queries";


export default function useActiveRound() {
  const activeRounds = useLiveQuery(GET_ACTIVE_ROUNDS)
  return activeRounds[0] || null
}

