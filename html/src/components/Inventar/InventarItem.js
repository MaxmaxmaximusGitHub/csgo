import styles from './InventarItem.styl'
import toMoney from "../../filters/toMoney";
import BetController from "../../controllers/BetController";


export default function InventarItem({item}) {

  const {id, item_data} = item
  const {image, market_hash_name, price} = item_data

  function onClick() {
    BetController.add(item)
  }

  return <li className={styles.InventarItem} onClick={onClick}>

    <img className={styles.image} src={image} alt=""/>
    <div className={styles.price}>{toMoney(price)}</div>
    <div className={styles.market_hash_name}>{market_hash_name}</div>

  </li>
}

