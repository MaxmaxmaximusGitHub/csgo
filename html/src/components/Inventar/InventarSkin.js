import styles from './InventarSkin.styl'


export default function InventarSkin({skin}) {

  const {image_url, market_hash_name, price} = skin

  return <li className={styles.InventarSkin}>
    <img className={styles.image} src={image_url} alt=""/>
    <div className={styles.marketHashName}>{market_hash_name}</div>
  </li>
}

