import useInterval from "./useInterval";


export default function useTime() {
  const [time, setTime] = useState(new Date)

  useInterval(() => {
    setTime(new Date)
  }, 1000 / 60)

  return time
}

