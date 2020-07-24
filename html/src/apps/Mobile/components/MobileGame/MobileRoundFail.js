import styles from './MobileRoundFail.styl'
import {observer} from 'mobx-react-lite'
import toBetX from "../../../../filters/toBetX";


function MobileRoundFail({round}) {

  const {x} = round

  return <div className={styles.MobileRoundFail}>
    <div className={styles.failText}>Fail</div>
    <div className={styles.x}>{toBetX(x)}</div>
  </div>
}


export default observer(MobileRoundFail)


