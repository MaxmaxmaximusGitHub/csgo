import {useEffect, useState} from 'react'


export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(getCurrentScreenWidth)

  function getCurrentScreenWidth() {
    if (!process.browser) return 0
    return screen.width
  }

  useEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(getCurrentScreenWidth())
    }

    window.addEventListener('resize', updateScreenWidth)
    return () => window.removeEventListener('resize', updateScreenWidth)
  }, [])

  return screenWidth
}



