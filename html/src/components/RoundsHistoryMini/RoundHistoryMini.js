import styles from './RoundHistoryMini.styl'
import {observer} from 'mobx-react-lite'


export default observer(function RoundHistoryMini({round}) {

  const {x} = round

  return <div className={styles.RoundHistoryMini}>
    {x}
  </div>
})


