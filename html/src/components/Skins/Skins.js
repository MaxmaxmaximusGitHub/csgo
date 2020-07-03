import styles from './Skins.styl'
import {GET_SKINS} from "../../graphql/queries";
import Skin from "./Skin";
import SkinsControls from "./SkinsControls";
import useQuery from "../../hooks/useQuery";
import List from "../List";
import useInput from "../../hooks/useInput";


export default function Skins() {

  const [search, setSearch] = useInput('')

  const skins = useQuery(GET_SKINS, {
    variables: {search: `%${search}%`},
    cursor: {prop: 'price'}
  })


  return <div className={styles.skins}>
    <SkinsControls/>

    <input
      type="text" value={search}
      onChange={setSearch} placeholder="Поиск..."
    />

    <List next={skins.next}>
      <ul className={styles.skinsList}>
        {skins.map(skin => (
          <Skin key={skin.id} skin={skin}/>
        ))}
      </ul>
    </List>

  </div>
}


