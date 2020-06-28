import useTimePassed from "./useTimePassed";


export default function useExponentialBetX(startPlayingTime, settings) {
  const timePassed = useTimePassed(startPlayingTime)
  const {speed_x} = settings

  return 1
}


