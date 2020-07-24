import styles from './MobileGame.styl'
import {observer} from 'mobx-react-lite'
import useActiveRound from "../../../../hooks/useActiveRound";
import useGameSettings from "../../../../hooks/useGameSettings";
import MobileRoundLoading from "./MobileRoundLoading";
import MobileRoundPending from "./MobileRoundPending";
import MobileRoundPlaying from "./MobileRoundPlaying";
import MobileRoundFail from "./MobileRoundFail";


function MobileGame() {

  const round = useActiveRound()
  const settings = useGameSettings()

  if (!round || !settings) {
    var content = <MobileRoundLoading/>
  } else if (round.status === 'pending') {
    content = <MobileRoundPending round={round} settings={settings}/>
  } else if (round.status === 'playing') {
    content = <MobileRoundPlaying round={round} settings={settings}/>
  } else {
    content = <MobileRoundFail round={round} settings={settings}/>
  }

  return <div className={styles.MobileGame}>
    {content}
  </div>
}


export default observer(MobileGame)


