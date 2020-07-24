import styles from './MobileGameGreed.styl'
import {observer} from 'mobx-react-lite'


function MobileGameGreed({x}) {

  const size = (10 / (x / 100)) / 2

  const style = {
    backgroundSize: `${size}em ${size}em`
  }

  return <div className={styles.MobileGameGreed} style={style}>
    <div className={styles.graphic}></div>
  </div>
}


export default observer(MobileGameGreed)


