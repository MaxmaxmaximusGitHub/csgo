import css from 'styled-jsx/css'
import vkIcon from 'res/images/vk.svg'
import telegramIcon from 'res/images/telegram.svg'
import discordIcon from 'res/images/discord.svg'
import SocialNetwork from "./SocialNetwork"


export default function SocialNetworks() {

  return <div className='social-networks'>

    <SocialNetwork icon={ vkIcon } href='//vk.com'/>
    <SocialNetwork icon={ telegramIcon } href='//vk.com'/>
    <SocialNetwork icon={ discordIcon } href='//vk.com'/>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .social-networks {
    display flex
    flex-direction row
  }
`