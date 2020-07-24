import styles from './MobileRoundPending.styl'
import {observer} from 'mobx-react-lite'
import useTimeLeft from "../../../../hooks/useTimeLeft";
import toTimeLeft from "../../../../filters/toTimeLeft";
import useTimePassed from "../../../../hooks/useTimePassed";
import toRange from "../../../../filters/toRange";
import ProgressBar from "../../../../components/ProgressBar";


function MobileRoundPending({round, settings}) {

  const {start_pending_at} = round
  const {pending_time} = settings

  const timeLeft = useTimeLeft(start_pending_at, pending_time)

  const timePassed = useTimePassed(start_pending_at)
  const completed = toRange(timePassed / pending_time)

  return <div className={styles.MobileRoundPending}>
    <div className={styles.timeLeft}>{toTimeLeft(timeLeft)}</div>
    <div className={styles.title}>Делайте ваши ставки...</div>
    <ProgressBar className={styles.progressBar} value={completed}/>
  </div>
}


export default observer(MobileRoundPending)


