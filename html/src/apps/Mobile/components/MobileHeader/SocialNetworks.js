import styles from './SocialNetworks.styl'
import {observer} from 'mobx-react-lite'
import vkIcon from 'res/images/vk.svg'
import discordIcon from 'res/images/discord.svg'
import telegramIcon from 'res/images/telegram.svg'
import SocialNetwork from "./SocialNetwork";


function SocialNetworks() {

  const networks = [
    {icon: vkIcon, url: '/'},
    {icon: discordIcon, url: '/'},
    {icon: telegramIcon, url: '/'},
  ]


  return <div className={styles.SocialNetworks}>
    <div className={styles.title}>Социальные сети</div>

    <div className={styles.networks}>
      {networks.map(network =>
        <SocialNetwork key={network.icon} network={network}/>
      )}
    </div>
  </div>
}




export default observer(SocialNetworks)


