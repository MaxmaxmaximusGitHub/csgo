import styles from './HomePage.styl'
import Game from "../../../components/Game/Game";
import Skins from "../../../components/Skins/Skins";


export default function HomePage() {

  return <div className={styles.homePage}>
    <Game/>
    <Skins/>
  </div>
}


