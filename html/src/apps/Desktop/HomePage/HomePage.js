import styles from './HomePage.styl'
import Game from "../../../components/Game/Game";
import Skins from "../../../components/Skins/Skins";
import Inventar from "../../../components/Inventar/Inventar";


export default function HomePage() {

  return <div className={styles.homePage}>
    <div className={styles.leftColumn}>
      <Game/>
      <Inventar/>
    </div>

    <Skins/>
  </div>
}


