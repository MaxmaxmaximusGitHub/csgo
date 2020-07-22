import styles from './MarketShopPanel.styl'
import {observer} from 'mobx-react-lite'
import Button from "../../../../../components/Button";
import MarketAdminPanel from "./MarketAdminControls";
import useCurrentUser from "../../../../../hooks/useCurrentUser";


export default observer(function MarketShopPanel() {

  const user = useCurrentUser()
  const isOwner = user && user.role === 'owner'

  return <div className={styles.MarketShopPanel}>
    <input className={styles.search} placeholder='Поиск'/>

    {isOwner && <MarketAdminPanel/>}
  </div>
})


