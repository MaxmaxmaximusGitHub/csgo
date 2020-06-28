import styles from './Skin.styl'
import Button from "../Button"
import {useMutation} from "@apollo/react-hooks";
import {REMOVE_SKIN} from "../../graphql/mutations";


export default function Skin({skin}) {

  const {image_url, market_hash_name} = skin

  const [removeSkin] = useMutation(REMOVE_SKIN, {
    variables: {id: skin.id}
  })

  return <div className={styles.skin}>
    <Button onClick={removeSkin}>remove</Button>
    <img className={styles.image} src={image_url} alt={market_hash_name}/>
  </div>
}


