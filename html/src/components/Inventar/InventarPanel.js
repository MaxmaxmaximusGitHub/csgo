import styles from './InventarPanel.styl'
import MarketModel from '../../models/MarketModel'
import Button from "../Button"
import {observer} from "mobx-react-lite";


export default observer(function InventarPanel() {


  return <div className={styles.InventarPanel}>
    <Button onClick={MarketModel.open}>Купить скины</Button>
  </div>
})


