import styles from './RoundsHistoryMini.styl'
import {observer} from 'mobx-react-lite'
import useLiveQuery from "../../hooks/useLiveQuery";
import {GET_ROUNDS_HISTORY_MINI} from "../../graphql/queries";
import RoundHistoryMini from "./RoundHistoryMini";


export default observer(function RoundsHistoryMini() {
  const rounds = useLiveQuery(GET_ROUNDS_HISTORY_MINI)

  return <div className={styles.RoundsHistoryMini}>
    {rounds.map(round =>
      <RoundHistoryMini key={round.id} round={round}/>
    )}
  </div>
})


