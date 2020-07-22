import styles from './MarketShop.styl'
import {observer} from 'mobx-react-lite'
import classNames from "classnames";
import MarketController from "../../../../../controllers/MarketController";
import useLiveQuery from "../../../../../hooks/useLiveQuery";
import {GET_ITEMS_DATA} from "../../../../../graphql/queries";
import List from "../../../../../components/List";
import useQuery from "../../../../../hooks/useQuery";
import toMoney from "../../../../../filters/toMoney";
import {useMutation} from "@apollo/react-hooks";
import {BUY_ITEM} from "../../../../../graphql/mutations";
import useCurrentUser from "../../../../../hooks/useCurrentUser";
import MarketAdminPanel from "./MarketAdminControls";
import MarketShopItem from "./MarketShopItem";
import MarketShopPanel from "./MarketShopPanel";


export default observer(function MarketShop({opened = true}) {


  const className = classNames(
    styles.MarketShop, {
      [styles.__opened]: opened
    }
  )

  const itemsData = useLiveQuery(GET_ITEMS_DATA, {
    cursor: {prop: 'price'}
  })

  return <div className={className}>

    <MarketShopPanel/>

    <List className={styles.list} list={itemsData}>
      {itemData =>
        <MarketShopItem itemData={itemData}/>
      }
    </List>

  </div>
})
