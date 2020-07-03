import styles from './Skin.styl'
import toMoney from "../../filters/toMoney";


export default function Skin({skin}) {

  const {id, price, image_url, market_hash_name} = skin

  return <div className={styles.skin}>
    <img className={styles.image} src={image_url}
         alt={market_hash_name}/>

    <span>{toMoney(price)}</span>
    <span> {market_hash_name} </span>
  </div>
}


