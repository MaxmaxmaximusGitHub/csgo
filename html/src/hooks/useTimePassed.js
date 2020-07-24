import useTime from "./useTime";


export default function useTimePassed(startTime = 0) {
  startTime = new Date(startTime)
  const currentTime = useTime()
  return currentTime - startTime
}

