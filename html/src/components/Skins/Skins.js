import styles from './Skins.styl'
import useLiveQuery from "../../hooks/useLiveQuery";
import {GET_SKINS} from "../../graphql/queries";
import Skin from "./Skin";
import SkinsControls from "./SkinsControls";


export default function Skins() {

  const skins = useLiveQuery(GET_SKINS)

  return <div className={styles.skins}>
    <SkinsControls/>

    <ul className={styles.skinsList}>
      {skins.map(skin => (
        <Skin key={skin.id} skin={skin}/>
      ))}
    </ul>

  </div>
}


