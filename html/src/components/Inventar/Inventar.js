import styles from './Inventar.styl'
import useQuery from "../../hooks/useQuery";
import {GET_MY_SKINS} from "../../graphql/queries";
import InventarSkin from "./InventarSkin";
import List from "../List";
import useInput from "../../hooks/useInput";
import InventarPanel from "./InventarPanel";
import Button from "../Button";


export default function Inventar() {

  const [search, setSearch] = useInput('')

  const skinsInInventar = useQuery(GET_MY_SKINS, {
    cursor: {prop: 'created_at'},
    variables: {search}
  })

  return <div className={styles.inventar}>
    <InventarPanel search={search} setSearch={setSearch}/>

    <List next={skinsInInventar.next}>
      <ul className={styles.skins}>
        {skinsInInventar.map(skinsInventar => (
          <InventarSkin key={skinsInventar.id} skin={skinsInventar.skin}/>
        ))}
      </ul>
    </List>

  </div>
}


