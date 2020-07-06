import styles from './Market.styl'
import useQuery from "../../hooks/useQuery";
import {GET_SKINS} from "../../graphql/queries";
import List from "../List";
import MarketSkin from "./MarketSkin";
import Popup from "../Popup";
import MarketPanel from "./MarketPanel";
import useInput from "../../hooks/useInput";
import {MarketContext} from "./MarketProvider";


export default function Market() {

  const {opened, close} = useContext(MarketContext)

  const [search, setSearch] = useInput('')

  const skins = useQuery(GET_SKINS, {
    variables: {search: `%${search}%`},
    cursor: {prop: 'price'}
  })


  return <Popup opened={opened} onClose={close} fullSize={true}>

    <div className={styles.Market}>

      <div className={styles.skins}>

        <MarketPanel
          search={search}
          setSearch={setSearch}
          closeMarket={close}
        />

        <List next={skins.next}>
          <ul className={styles.skinsList}>
            {skins.map(skin => (
              <MarketSkin key={skin.id} skin={skin}/>
            ))}
          </ul>
        </List>
      </div>

    </div>

  </Popup>
}
