import useLiveQuery from "./useLiveQuery";
import {GET_GAME_SETTINGS} from '../graphql/queries'


export default function useGameSettings() {
  const gameSettings = useLiveQuery(GET_GAME_SETTINGS)
  return gameSettings[0] || null
}

