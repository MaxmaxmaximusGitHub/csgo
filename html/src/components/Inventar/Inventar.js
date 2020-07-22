import styles from './Inventar.styl'
import InventarPanel from "./InventarPanel";
import {observer} from "mobx-react-lite"
import MarketController from '../../controllers/MarketController'
import classNames from 'classnames'
import useMyItems from "../../hooks/useMyItems";
import List from "../List";
import Item from "../Item";
import InventarItem from "./InventarItem";


export default observer(function Inventar() {

  const className = classNames(
    styles.Inventar, {
      [styles.__hide]: MarketController.opened
    }
  )

  const items = useMyItems()


  return <div className={className}>
    <InventarPanel/>

    <List list={items}>{item =>
      <InventarItem item={item}/>
    }</List>

  </div>
})


