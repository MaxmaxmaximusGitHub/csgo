import styles from './Market.styl'
import Popup from "../Popup"
import {observer} from "mobx-react-lite"
import MarketController from "../../controllers/MarketController";
import MarketInventar from "./MarketInventar/MarketInventar";
import MarketShop from "./MarketShop/MarketShop";


export default observer(function Market() {

  const {opened, close} = MarketController

  return <Popup opened={opened} onClose={close}>
    <div className={styles.Market}>
      <MarketInventar/>
      <MarketShop/>
    </div>
  </Popup>
})


