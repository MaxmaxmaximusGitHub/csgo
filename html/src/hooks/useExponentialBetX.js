import useTimePassed from "./useTimePassed";


export default function useExponentialBetX(round, settings) {

  const {start_playing_at = 0} = round
  const {speed_x = 0} = settings

  const timePassed = useTimePassed(start_playing_at)

  if (!start_playing_at) return null
  if (!speed_x) return null

  return 100 + (timePassed / 1000 * 100)
}


