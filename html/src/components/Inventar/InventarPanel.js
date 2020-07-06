import styles from './InventarPanel.styl'
import Button from "../Button";
import {MarketContext} from "../Market/MarketProvider";



export default function InventarPanel({search, setSearch}) {

  const marketContext = useContext(MarketContext)

  return <div className={styles.InventarPanel}>
    <Button onClick={marketContext.open}>Купить скины</Button>

    <input
      value={search} onChange={setSearch}
      placeholder='Поиск...'
    />
  </div>
}


