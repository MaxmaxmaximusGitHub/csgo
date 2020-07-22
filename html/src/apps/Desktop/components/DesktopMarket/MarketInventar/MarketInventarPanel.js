import styles from './MarketInventarPanel.styl'
import {observer} from 'mobx-react-lite'


export default observer(function MarketInventarPanel() {

  return <div className={styles.MarketInventarPanel}>
    <h4 className={styles.title}>Ваш инвантарь</h4>
  </div>
})


