import useScreenWidth from "./useScreenWidth"


export default function useFontSize() {
  const screenWidth = useScreenWidth()
  return screenWidth / 110
}

