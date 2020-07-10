import styles from './Inventar.styl'
import useInput from "../../hooks/useInput";
import InventarPanel from "./InventarPanel";
import {observer} from "mobx-react-lite"
import MarketModel from '../../models/MarketModel'
import MyItems from "./MyItems";
import classNames from 'classnames'


export default observer(function Inventar() {

  const className = classNames(
    styles.Inventar, {
      [styles.__hide]: MarketModel.opened
    }
  )

  return <div className={className}>
    <InventarPanel/>
    <MyItems/>
  </div>
})


