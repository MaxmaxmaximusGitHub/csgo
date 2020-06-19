import styles from './AdminPanel.styl'
import BotsManager from "./BotsManager";


export default function AdminPanel() {
  return <div className={styles.game}>
    <BotsManager/>
  </div>
}

