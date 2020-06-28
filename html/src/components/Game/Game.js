import styles from './Game.styl'
import useActiveRound from "../../hooks/useActiveRound";
import toBetX from "../../filters/toBetX";
import useTimePassed from "../../hooks/useTimePassed";
import useGameSettings from "../../hooks/useGameSettings";
import toTimeLeft from "../../filters/toTimeLeft";
import useTimeLeft from "../../hooks/useTimeLeft";
import toRange from "../../filters/toRange";
import Button from "../Button";
import useExponentialBetX from "../../hooks/useExponentialBetX";
import Confetti from 'react-confetti'


export default function Game() {
  const round = useActiveRound()
  const settings = useGameSettings()

  if (!round || !settings) {
    var content = <RoundLoading/>
  } else if (round.status === 'pending') {
    content = <RoundPending round={round} settings={settings}/>
  } else if (round.status === 'playing') {
    content = <RoundPlaying round={round} settings={settings}/>
  } else {
    content = <RoundShow round={round} settings={settings}/>
  }


  return <div className={styles.game}>
    {/*{round && round.status === 'show' && <Confetti/>}*/}

    {content}
  </div>
}


function RoundPending({round, settings}) {
  const {start_pending_at} = round
  const {pending_time} = settings

  const timeLeft = useTimeLeft(start_pending_at, pending_time)

  const timePassed = useTimePassed(start_pending_at)
  const completed = toRange(timePassed / pending_time)

  return <>
    <ProgressBar value={completed}/>
    <div>Ожидание игроков {toTimeLeft(timeLeft)}</div>
    <Button style={{fontSize: '1.3em'}}>Играть</Button>
  </>
}


function RoundPlaying({round, settings}) {

  const {start_playing_at} = round
  const x = useExponentialBetX(start_playing_at, settings)


  return <div className={styles.playing}>
    <div className={styles.playingX}>
      {toBetX(x)}
    </div>
  </div>
}


function RoundShow({round, settings}) {
  const {x} = round

  return <div className={styles.show}>
    {toBetX(x)}
  </div>
}


function ProgressBar({value}) {

  const progressBarStyle = {
    width: `${value * 100}%`
  }

  return <div
    className={styles.progressBar}
    style={progressBarStyle}>
  </div>
}


function RoundLoading() {
  return ''
}


// y = a * (x * x)
// x * x = y / a
// t = Math.sqrt(x / a)
