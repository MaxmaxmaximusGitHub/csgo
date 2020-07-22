import styles from './DesktopMarket.styl'
import Popup from "../../../../components/Popup"
import {observer} from "mobx-react-lite"
import MarketController from "../../../../controllers/MarketController";
import MarketInventar from "./MarketInventar/MarketInventar";
import MarketShop from "./MarketShop/MarketShop";


function DesktopMarket() {

  const {opened, close} = MarketController

  return <Popup opened={opened} onClose={close}>
    <div className={styles.DesktopMarket}>
      <MarketInventar opened={opened}/>
      <MarketShop opened={opened}/>
    </div>
  </Popup>
}


export default observer(DesktopMarket)

