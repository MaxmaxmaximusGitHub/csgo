import styles from './MobileHeaderButton.styl'
import {observer} from 'mobx-react-lite'
import HeaderController from "../../../../controllers/HeaderController";
import classNames from 'classnames'


function MobileHeaderButton() {

  const {opened, toggle} = HeaderController

  const className = classNames(styles.MobileHeaderButton, {
    [styles.__opened]: opened
  })

  return <div className={className} onClick={toggle}>
    <div className={styles.plank}></div>
    <div className={styles.plank}></div>
    <div className={styles.plank}></div>
  </div>
}


export default observer(MobileHeaderButton)


