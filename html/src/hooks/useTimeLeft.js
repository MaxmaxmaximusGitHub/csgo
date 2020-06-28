import useTimePassed from "./useTimePassed";


export default function useTimeLeft(timeStarted, timeDuration) {
  const timePassed = useTimePassed(timeStarted)
  return timeDuration - timePassed
}


