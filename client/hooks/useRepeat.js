export default function useRepeat(length, handler) {
  return new Array(length).fill(true).map((i, index) => {
    return handler(index)
  })
}


