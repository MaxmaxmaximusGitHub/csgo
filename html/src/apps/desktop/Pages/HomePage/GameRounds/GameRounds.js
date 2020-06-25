import styles from './GameRounds.styl'
import useLiveQuery from "../../../../../hooks/useLiveQuery";


export default function GameRounds() {


  const {data} = useLiveQuery()

  return <div className={styles.gameRounds}>
    GameRounds
  </div>
}


