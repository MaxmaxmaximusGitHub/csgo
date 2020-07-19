import styles from './MarketInventar.styl'
import {observer} from 'mobx-react-lite'
import MarketController from "../../../controllers/MarketController";
import classNames from 'classnames'
import useMyItems from "../../../hooks/useMyItems";
import List from "../../List";
import MarketInventarItem from "./MarketInventarItem";
import MarketInventarPanel from "./MarketInventarPanel";


export default observer(function MarketInventar() {

  const {opened} = MarketController

  const items = useMyItems()

  const className = classNames(
    styles.MarketInventar, {
      [styles.__opened]: opened
    }
  )

  return <div className={className}>
    <MarketInventarPanel/>

    <List className={styles.list} list={items}>{
      (item) => <MarketInventarItem item={item}/>
    }</List>
  </div>
})


