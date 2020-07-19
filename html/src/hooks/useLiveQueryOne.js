import useLiveQuery from "./useLiveQuery";


export default function useLiveQueryOne(...args) {
  const result = useLiveQuery(...args)
  return result[0] || {}
}

