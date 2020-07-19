import styles from './BetsPanel.styl'
import {observer} from 'mobx-react-lite'
import BetController from "../../controllers/BetController";
import BetItem from "./BetItem";
import Button from "../Button";
import {useMutation} from "@apollo/react-hooks";
import {MAKE_BET} from "../../graphql/mutations";
import useNotificator from "../../hooks/useNotificator";


export default observer(function BetsPanel() {

  const items = BetController.items

  const notificator = useNotificator()

  const [makeBet] = useMutation(MAKE_BET, {
    variables: {items_ids: items.map(item => item.id)},
    onCompleted() {
      BetController.clear()
      notificator.alert('Ставка сделана')
    },
  })

  return <div className={styles.BetsPanel}>

    <div className={styles.betItems}>
      {items.map(item => <BetItem key={item.id} item={item}/>)}
    </div>

    <Button onClick={makeBet}>Играть</Button>

  </div>
})

