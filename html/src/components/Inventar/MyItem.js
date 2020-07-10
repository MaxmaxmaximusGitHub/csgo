import styles from './MyItem.styl'
import toMoney from "../../filters/toMoney";


export default function MyItem({item}) {

  const {id, item_data} = item
  const {image_url, market_hash_name, price} = item_data

  function onClick() {

  }

  return <li className={styles.InventarSkin} onClick={onClick}>
    <img className={styles.image} src={image_url} alt=""/>
    <div className={styles.marketHashName}>{market_hash_name}</div>
    <div className={styles.price}>{toMoney(price)}</div>
  </li>
}

