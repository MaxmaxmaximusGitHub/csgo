import styles from './SkinsControls.styl'
import Button from "../Button";
import {useMutation} from "@apollo/react-hooks";
import {UPDATE_SKINS} from "../../graphql/mutations";
import useSkinLoadingState from "../../hooks/useSkinLoadingState";
import ProgressBar from "../ProgressBar";


export default function SkinsControls() {

  const [updateSkins] = useMutation(UPDATE_SKINS)
  const skinLoadingState = useSkinLoadingState()

  const {loading, completed, total} = skinLoadingState

  return <div className={styles.skinsPanel}>
    {loading && <ProgressBar value={completed / total}/>}

    <div className={styles.controls}>
      <Button onClick={updateSkins}>updateSkins</Button>

      {loading && <div className={styles.loadingState}>
        loading... {completed}/{total}
      </div>}
    </div>

  </div>
}


