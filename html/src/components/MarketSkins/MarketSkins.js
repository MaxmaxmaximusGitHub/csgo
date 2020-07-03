import styles from './MarketSkins.styl'
import useQuery from "../../hooks/useQuery";
import {GET_SKINS} from "../../graphql/queries";
import List from "../List";
import MarketSkin from "./MarketSkin";
import Popup from "../Popup";
import MarketSkinsPanel from "./MarketSkinsPanel";
import useInput from "../../hooks/useInput";


export default function MarketSkins({opened, onClose}) {

  const [selectedSkins, setSelectedSkins] = useState([])
  const [search, setSearch] = useInput('')

  const foundSkins = useQuery(GET_SKINS, {
    variables: {search: `%${search}%`},
    cursor: {prop: 'price'}
  })

  function closeMarket() {
    onClose()
  }


  return <Popup opened={opened} onClose={closeMarket} fullSize={true}>

    <div className={styles.marketSkins}>

      <MarketSkinsPanel
        search={search}
        setSearch={setSearch}
        closeMarket={closeMarket}
      />

      <List next={foundSkins.next}>
        <ul className={styles.skinsList}>
          {foundSkins.map(skin => (
            <MarketSkin key={skin.id} skin={skin}/>
          ))}
        </ul>
      </List>
    </div>

  </Popup>
}


