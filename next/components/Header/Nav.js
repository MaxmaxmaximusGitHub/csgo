import css from 'styled-jsx/css'
import NavigationLink from "./NavigationLink"
import historyIcon from "../../res/images/history-white.svg"
import supportIcon from "../../res/images/support-white.svg"
import bonusesIcon from "../../res/images/bonuses-white.svg"
import refsIcon from "../../res/images/refs-white.svg"


export default function Nav() {


  return <nav className='nav-bar'>
    <NavigationLink href='/'>Главная</NavigationLink>

    <NavigationLink href='/history' icon={historyIcon}>
      История
    </NavigationLink>

    <NavigationLink href='/support' icon={supportIcon}>
      Поддержка
    </NavigationLink>

    <NavigationLink href='/bonuses' icon={bonusesIcon}>
      Бонусы
    </NavigationLink>

    <NavigationLink href='/referrals' icon={refsIcon}>
      Рефералы
    </NavigationLink>

    <style jsx>{style}</style>
  </nav>
}


// language=Stylus
const style = css`
  .nav-bar {
    display flex
    flex-direction row
    flex-grow 1
    margin-bottom 1em
    padding-left 0.5em
  }
`

