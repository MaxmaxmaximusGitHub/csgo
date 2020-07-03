import styles from './HomePage.styl'
import Game from "../../../components/Game/Game";
import Skins from "../../../components/Skins/Skins";
import SkinsInventar from "../../../components/SkinsInventar/SkinsInventar";


export default function HomePage() {

  return <div className={styles.homePage}>
    <div className={styles.leftColumn}>
      <Game/>
      <SkinsInventar/>
    </div>

    <Skins/>
  </div>
}


