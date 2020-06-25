import styles from './HomePage.styl'
import GameRounds from './GameRounds/GameRounds'


export default function HomePage() {

  return <div className={styles.homePage}>
    <GameRounds/>
  </div>
}


