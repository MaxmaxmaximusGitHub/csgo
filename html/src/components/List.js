import useInterval from "../hooks/useInterval";


const PADDING = 1000

export default function List({children, next}) {
  const ref = useRef(null);

  function checkNeedMore() {
    const element = ref.current
    const scrollTop = element.scrollTop
    const maxScroll = element.scrollHeight - element.offsetHeight - PADDING

    if (scrollTop >= maxScroll) {
      if (typeof next === 'function') {
        next()
      }
    }
  }

  // useInterval(checkNeedMore, 1000)
  // useEffect(checkNeedMore)

  return React.cloneElement(React.Children.only(children), {
    ref, onScroll: checkNeedMore
  })
}

