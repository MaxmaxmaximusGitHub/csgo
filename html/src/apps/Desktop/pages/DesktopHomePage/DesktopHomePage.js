import styles from './DesktopHomePage.styl'
import Game from "../../../../components/Game/Game";
import Inventar from "../../../../components/Inventar/Inventar";
import BetsPanel from "../../../../components/BetsPanel/BetsPanel";
import RoundsHistoryMini from "../../../../components/RoundsHistoryMini/RoundsHistoryMini";


export default function DesktopHomePage() {

  return <div className={styles.homePage}>
    <div className={styles.leftColumn}>
      <Game/>
      <RoundsHistoryMini/>
      <Inventar/>
    </div>

    <div className={styles.middleColumn}>
      <BetsPanel/>
    </div>

  </div>
}


