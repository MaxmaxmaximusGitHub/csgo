import styles from './SkinsInventar.styl'
import SkinsInventarPanel from "./SkinsInventarPanel"
import MarketSkins from "../MarketSkins/MarketSkins";
import MySkins from "./MySkins";
import useCurrentUser from "../../hooks/useCurrentUser";


export default function SkinsInventar() {

  const [marketOpened, setMarketOpened] = useState(false)
  const user = useCurrentUser()

  function openMarket() {
    setMarketOpened(true)
  }

  function closeMarket() {
    setMarketOpened(false)
  }

  return <div className={styles.inventar}>
    {!user && <NeedsLogin/>}

    {user && <>
      <SkinsInventarPanel onOpenMarket={openMarket}/>
      <MarketSkins onClose={closeMarket} opened={marketOpened}/>
      <MySkins/>
    </>}
  </div>
}


function NeedsLogin() {
  return <span>NeedsLogin</span>
}
