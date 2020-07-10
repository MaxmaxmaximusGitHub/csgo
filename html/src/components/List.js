import useInterval from "../hooks/useInterval";
import Button from "./Button";


export default function List(
  {emptyMessage, children, list, className, ...props}
) {

  const ref = useRef(null)
  const padding = 1000

  function checkMore() {
    const element = ref.current
    const scrollTop = element.scrollTop
    const maxScroll = element.scrollHeight - element.offsetHeight - padding
    const {next} = list

    if (scrollTop >= maxScroll) {
      if (typeof next === 'function') {
        next()
      }
    }
  }

  // useInterval(checkMore, 1000)
  // useEffect(checkMore)

  if (!list.length && emptyMessage) {
    return emptyMessage
  }

  return <ul ref={ref} onScroll={checkMore} className={className} {...props}>
    {list.map(item => (
      React.cloneElement(children(item), {key: item.id})
    ))}
  </ul>
}

