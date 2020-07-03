import styles from './SkinsInventarPanel.styl'
import Button from "../Button";
import Popup from "../Popup";
import MarketSkins from "../MarketSkins/MarketSkins";


export default function SkinsInventarPanel({onOpenMarket}) {

  return <div className={styles.inventarControls}>
    <Button onClick={onOpenMarket}>Купить скины</Button>
  </div>
}


