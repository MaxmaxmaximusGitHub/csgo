import styles from './Item.styl'
import toMoney from "../filters/toMoney";


export default function Item({item, onClick}) {

  const {id, item_data} = item
  const {image, market_hash_name, price} = item_data


  return <li className={styles.Item} onClick={onClick}>

    <div className={styles.content}>
      <img className={styles.image} src={image} alt=""/>
      <div className={styles.price}>{toMoney(price)}</div>
      <div className={styles.market_hash_name}>{market_hash_name}</div>
    </div>

  </li>
}

