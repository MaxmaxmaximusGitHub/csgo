import classNames from 'classnames'
import styles from './Popup.styl'


export default function Popup(props) {

  const {opened, onClose, children} = props

  const popupRef = useRef(null)

  const popupClassName = classNames(
    styles.Popup, {
      [styles.__opened]: opened,
    }
  )

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

    {children}

  </div>
}

