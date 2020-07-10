import styles from './Market.styl'
import Popup from "../Popup"
import {observer} from "mobx-react-lite"
import MarketModel from "../../models/MarketModel";
import MarketInventar from "./MarketInventar";
import MarketShop from "./MarketShop";


export default observer(function Market() {

  const {opened, close} = MarketModel

  return <Popup opened={opened} onClose={close}>
    <div className={styles.Market}>
      <MarketInventar/>
      <MarketShop/>
    </div>
  </Popup>
})


