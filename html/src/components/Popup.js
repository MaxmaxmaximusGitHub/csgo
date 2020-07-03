import classes from "../lib/classes";
import styles from './Popup.styl'


export default function Popup(props) {

  const {opened, onClose, fullSize = false, children} = props

  const popupRef = useRef(null)

  const popupClassName = classes(styles.popup, [
    styles.__opened, opened,
    styles['__full-size'], fullSize,
  ])

  const contentClassName = classes(styles.content)

  function closePopup() {
    if (onClose) {
      onClose(false)
    }
  }

  function onMouseDown(event) {
    if (event.target === popupRef.current) {
      closePopup()
    }
  }

  return <div
    ref={popupRef}
    className={popupClassName}
    onMouseDown={onMouseDown}>

    <div className={contentClassName}>
      {children}
    </div>

  </div>
}

