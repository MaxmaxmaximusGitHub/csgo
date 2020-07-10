import styles from './ItemsDataManager.styl'
import {observer} from 'mobx-react-lite'
import Button from "../Button";
import {useMutation} from "@apollo/react-hooks";
import {UPDATE_ITEMS_DATA} from "../../graphql/mutations";


export default observer(function ItemsDataManager() {

  const [updateItemsData] = useMutation(UPDATE_ITEMS_DATA)

  return <div className={styles.ItemsDataManager}>
    ItemsDataManager

    <Button onClick={updateItemsData}>update items data</Button>
  </div>
})


