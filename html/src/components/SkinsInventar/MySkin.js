import styles from './MySkin.styl'


export default function MySkin({skin}) {

  const {image_url, market_hash_name, price} = skin

  return <li className={styles.MySkin}>
    <img className={styles.image} src={image_url} alt=""/>
  </li>
}

