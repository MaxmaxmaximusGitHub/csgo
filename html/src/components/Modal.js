import styles from './Modal.styl'
import Popup from "./Popup";
import classNames from 'classnames'


export default function Modal({children, opened, ...props}) {

  const modalClassName = classNames(
    styles.Modal, {
      [styles.__opened]: opened
    }
  )

  return <Popup opened={opened} {...props}>
    <div className={modalClassName}>
      {children}
    </div>
  </Popup>
}



