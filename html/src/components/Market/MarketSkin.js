import styles from './MarketSkin.styl'
import toMoney from "../../filters/toMoney";
import {useMutation} from "@apollo/react-hooks";
import {BUY_SKIN} from "../../graphql/mutations";
import useNotificator from "../../hooks/useNotificator";
import {GET_MY_SKINS} from "../../graphql/queries";


export default function MarketSkin({skin, selected, onSkinClick}) {

  const {id, image_url, market_hash_name, price} = skin

  const notificator = useNotificator()

  const [buySkin] = useMutation(BUY_SKIN, {
    variables: {skin_id: id},
    refetchQueries: [{query: GET_MY_SKINS}],
    onCompleted: () => {
      notificator.alert(`Купленно ${market_hash_name}`)
    }
  })

  return <div className={styles.MarketSkin} onClick={buySkin}>
    <img className={styles.image} src={image_url} alt=""/>
    <div className={styles.marketHashName}>{market_hash_name}</div>
    <div className={styles.price}>{toMoney(price)}</div>
  </div>

}


