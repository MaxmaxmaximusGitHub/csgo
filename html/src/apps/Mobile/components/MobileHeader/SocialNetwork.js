import styles from './SocialNetwork.styl'
import {observer} from 'mobx-react-lite'


function SocialNetwork({network}) {
  const {icon, url} = network

  const style = {
    backgroundImage: `url(${icon})`
  }

  return <a
    className={styles.SocialNetwork}
    style={style}
    href={url}>
  </a>
}


export default observer(SocialNetwork)

