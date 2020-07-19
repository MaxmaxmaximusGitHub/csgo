import styles from './MarketShopItem.styl'
import {observer} from 'mobx-react-lite'
import toMoney from "../../../filters/toMoney";
import {useMutation} from "@apollo/react-hooks";
import {BUY_ITEM} from "../../../graphql/mutations";
import useNotificator from "../../../hooks/useNotificator";
import {GET_MY_ITEMS} from "../../../graphql/queries";


export default observer(function MarketShopItem({itemData}) {

  const {id, image, price, phase, market_hash_name} = itemData

  const [buyItem] = useMutation(BUY_ITEM, {
    refetchQueries: [{query: GET_MY_ITEMS}],
    variables: {item_data_id: id}
  })

  return <div className={styles.MarketShopItem} onClick={buyItem}>
    <img className={styles.image} src={image}/>
    <div className={styles.price}>{toMoney(price)}</div>
    <div className={styles.market_hash_name}>{market_hash_name}</div>
    {phase && <div className={styles.phase}>{phase}</div>}

  </div>
})


