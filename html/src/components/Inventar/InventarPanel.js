import styles from './InventarPanel.styl'
import MarketController from '../../controllers/MarketController'
import Button from "../Button"
import {observer} from "mobx-react-lite";


export default observer(function InventarPanel() {


  return <div className={styles.InventarPanel}>
    <Button onClick={MarketController.open}>Купить скины</Button>
  </div>
})


