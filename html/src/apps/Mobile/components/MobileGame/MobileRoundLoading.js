import styles from './MobileRoundLoading.styl'
import {observer} from 'mobx-react-lite'


function MobileRoundLoading() {

  return <div className={styles.MobileRoundLoading}>
    Загрузка...
  </div>
}


export default observer(MobileRoundLoading)


