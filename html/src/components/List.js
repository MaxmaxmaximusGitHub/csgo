import styles from './List.styl'
import classNames from 'classnames'
import {observer} from 'mobx-react-lite'

export default observer(function List(
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

  const totalClassName = classNames(styles.List, className)

  return <ul
    ref={ref} className={totalClassName} onScroll={checkMore} {...props}>

    {list.map(item => (
      React.cloneElement(children(item), {key: item.id})
    ))}

  </ul>
})

