import styles from './MarketAdminControls.styl'
import {observer} from 'mobx-react-lite'
import {useMutation} from "@apollo/react-hooks";
import Button from "../../Button";
import {
  CLEAR_ITEMS_DATA, STOP_UPDATE_ITEMS_DATA, UPDATE_ITEMS_DATA
} from "../../../graphql/mutations";
import {GET_ITEMS_DATA, GET_ITEMS_DATA_LOADER} from "../../../graphql/queries";
import useLiveQueryOne from "../../../hooks/useLiveQueryOne";
import ProgressBar from "../../ProgressBar";


export default observer(function MarketAdminControls() {

  const [updateItemsData] = useMutation(UPDATE_ITEMS_DATA, {
    refetchQueries: [{query: GET_ITEMS_DATA}]
  })

  const [stopUpdateItemsData] = useMutation(STOP_UPDATE_ITEMS_DATA, {
    refetchQueries: [{query: GET_ITEMS_DATA}]
  })

  const [clearItemsData] = useMutation(CLEAR_ITEMS_DATA, {
    refetchQueries: [{query: GET_ITEMS_DATA}]
  })

  const {loading, completed} = useLiveQueryOne(GET_ITEMS_DATA_LOADER)
  const total = 5000


  return <div className={styles.MarketAdminControls}>

    {!loading && <>
      <Button onClick={updateItemsData}>
        Update items
      </Button>

      <Button onClick={clearItemsData}>
        Delete all items
      </Button>
    </>}


    {loading && <>
      <Button onClick={stopUpdateItemsData}>Stop</Button>
      <div className={styles.completed}>completed: {completed}</div>
      <ProgressBar className={styles.progressBar} value={completed / total}/>
    </>}

  </div>
})


