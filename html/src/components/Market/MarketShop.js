import styles from './MarketShop.styl'
import {observer} from 'mobx-react-lite'
import classNames from "classnames";
import MarketModel from "../../models/MarketModel";


export default observer(function MarketShop() {

  const {opened} = MarketModel

  const className = classNames(
    styles.MarketShop, {
      [styles.__opened]: opened
    }
  )

  return <div className={className}>
    MarketShop
  </div>
})


