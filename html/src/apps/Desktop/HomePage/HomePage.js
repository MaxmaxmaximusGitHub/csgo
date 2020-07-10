import styles from './HomePage.styl'
import Game from "../../../components/Game/Game";
import Inventar from "../../../components/Inventar/Inventar";
import BetsPanel from "../../../components/BetsPanel/BetsPanel";


export default function HomePage() {

  return <div className={styles.homePage}>
    <div className={styles.leftColumn}>
      <Game/>
      <Inventar/>
    </div>

    <div className={styles.middleColumn}>
      <BetsPanel/>
    </div>

  </div>
}


