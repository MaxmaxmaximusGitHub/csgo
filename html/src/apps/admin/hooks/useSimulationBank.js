import useLiveQuery from "../../../hooks/useLiveQuery";
import {GET_SIMULATION_BANK} from "../graphql/queries";


export default function useSimulationBank() {
  const {data} = useLiveQuery(GET_SIMULATION_BANK)

  if (!data) {
    return null
  }

  return data.simulation_bank[0]
}
