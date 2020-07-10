import styles from './AdminPage.styl'
import {observer} from 'mobx-react-lite'
import ItemsDataManager from "../../../components/ItemsDataManager/ItemsDataManager";


export default observer(function AdminPage() {

  return <div className={styles.AdminPage}>
    <ItemsDataManager/>
  </div>
})


