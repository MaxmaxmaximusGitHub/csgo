import styles from './MarketInventar.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'
import useMyItems from "../../../../../hooks/useMyItems";
import List from "../../../../../components/List";
import MarketInventarItem from "./MarketInventarItem";
import MarketInventarPanel from "./MarketInventarPanel";


export default observer(function MarketInventar({opened = true}) {

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

