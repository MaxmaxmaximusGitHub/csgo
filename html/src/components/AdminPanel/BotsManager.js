import useLiveQuery from "../../hooks/useLiveQuery"
import {GET_BOTS} from "../../graphql/queries"
import BotsPanel from "./BotsPanel"


export default function BotsManager() {
  const {data} = useLiveQuery(GET_BOTS)

  return <div>
    <BotsPanel/>

    <ul>
      {data && data['bot'].map(bot => (
        <li key={bot.id}>bot</li>
      ))}
    </ul>

  </div>
}


