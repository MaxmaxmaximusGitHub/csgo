import styles from './SkinsControls.styl'
import Button from "../Button";
import {useMutation} from "@apollo/react-hooks";
import {UPDATE_SKINS} from "../../graphql/mutations";
import useSkinLoadingState from "../../hooks/useSkinLoadingState";
import ProgressBar from "../ProgressBar";


export default function SkinsControls() {

  const [updateSkins] = useMutation(UPDATE_SKINS)
  const skinLoadingState = useSkinLoadingState()

  const {
    loading, completed, total,
    try_images_loading, completed_images, total_images
  } = skinLoadingState

  const loadingProgress = completed / total
  const imagesProgress = completed_images / total_images

  return <div className={styles.skinsPanel}>

    <div className={styles.controls}>
      <Button onClick={updateSkins}>updateSkins</Button>

      {loading && <div className={styles.loadingState}>
        Loading skins: {completed}/{total}
        <ProgressBar value={completed / total}/>
      </div>}

      {try_images_loading && <div className={styles.imagesLoadingState}>
        Loading images: {completed_images}/{total_images}
        <ProgressBar value={completed_images / total_images}/>
      </div>}

    </div>

  </div>
}


