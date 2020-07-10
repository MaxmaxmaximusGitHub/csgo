import styles from './MarketInventar.styl'
import {observer} from 'mobx-react-lite'
import MarketModel from "../../models/MarketModel";
import classNames from 'classnames'


export default observer(function MarketInventar() {

  const {opened} = MarketModel

  const className = classNames(
    styles.MarketInventar, {
      [styles.__opened]: opened
    }
  )

  return <div className={className}>
    MarketInventar
  </div>
})


