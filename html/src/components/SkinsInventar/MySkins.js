import styles from './MySkins.styl'
import List from "../List";
import useLiveQuery from "../../hooks/useLiveQuery";
import {GET_MY_SKINS} from "../../graphql/queries";
import MySkin from "./MySkin";
import useQuery from "../../hooks/useQuery";
import Button from "../Button";


export default function MySkins() {

  const skinsInventars = useQuery(GET_MY_SKINS, {
    cursor: {prop: 'created_at'}
  })

  return <List next={skinsInventars.next}>
    <ul className={styles.MySkins}>
      {skinsInventars.map(skinsInventar => (
        <MySkin key={skinsInventar.id} skin={skinsInventar.skin}/>
      ))}

      <Button onClick={skinsInventars.next}>next</Button>
    </ul>
  </List>
}





