import styles from './MarketInventarItem.styl'
import {observer} from 'mobx-react-lite'
import {useMutation} from "@apollo/react-hooks";
import {SELL_ITEM} from "../../../graphql/mutations";
import toMoney from "../../../filters/toMoney";
import useNotificator from "../../../hooks/useNotificator";
import {GET_MY_ITEMS} from "../../../graphql/queries";


export default observer(function MarketInventarItem({item}) {

  const {id, item_data} = item

  const {image, price, phase, market_hash_name} = item_data

  const notificator = useNotificator()

  const [sellItem] = useMutation(SELL_ITEM, {
    variables: {item_id: id},
    refetchQueries: [{query: GET_MY_ITEMS}],
    onCompleted() {
      notificator.alert('Продано')
    }
  })


  return <div className={styles.MarketInventarItem} onClick={sellItem}>
    <img className={styles.image} src={image} alt={market_hash_name}/>
    <div className={styles.price}>{toMoney(price)}</div>
    <div className={styles.market_hash_name}>{market_hash_name}</div>
    {phase && <div className={styles.phase}>{phase}</div>}
  </div>
})


