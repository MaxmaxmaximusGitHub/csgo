import styles from './BetItem.styl'
import {observer} from 'mobx-react-lite'
import BetController from "../../controllers/BetController";
import toMoney from "../../filters/toMoney";


export default observer(function BetItem({item}) {

  const {id, item_data} = item
  const {image, market_hash_name, price, phase} = item_data

  function onClick() {
    BetController.remove(item)
  }

  return <div className={styles.BetItem} onClick={onClick}>
    <img className={styles.image} src={image} alt={market_hash_name}/>
    <div className={styles.price}>{toMoney(price)}</div>
    {/*<div className={styles.market_hash_name}>{market_hash_name}</div>*/}
    {/*<div className={styles.phase}>{phase}</div>*/}
  </div>
})


