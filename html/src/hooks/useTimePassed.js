import useTime from "./useTime";


export default function useTimePassed(startTime) {
  startTime = new Date(startTime)
  const currentTime = useTime()
  return currentTime - startTime
}

