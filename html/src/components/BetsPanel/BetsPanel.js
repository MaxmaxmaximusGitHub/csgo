import styles from './BetsPanel.styl'
import Slot from "./Slot";
import {observer} from 'mobx-react-lite'
import {observable, computed, action} from 'mobx'
import Button from "../Button";



export default observer(function BetsPanel() {

  return <div className={styles.BetPanel}>
    <Button>plus</Button>
  </div>
})

