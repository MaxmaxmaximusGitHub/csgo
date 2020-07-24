import styles from './MobileRoundPlaying.styl'
import {observer} from 'mobx-react-lite'
import useExponentialBetX from "../../../../hooks/useExponentialBetX";
import toBetX from "../../../../filters/toBetX";
import MobileGamePlain from "./MobileGameGreed";


function MobileRoundPlaying({round, settings}) {

  const x = useExponentialBetX(round,settings)

  return <div className={styles.MobileRoundPlaying}>
    <div className={styles.bg}>
      <MobileGamePlain x={x}/>
    </div>

    <div className={styles.x}>{toBetX(x)}</div>
  </div>
}


export default observer(MobileRoundPlaying)


