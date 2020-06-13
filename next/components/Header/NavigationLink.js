import {useRouter} from "next/router"
import css from 'styled-jsx/css'
import Link from "next/link"


export default function NavigationLink({href, icon, children}) {

  const {pathname} = useRouter()

  return <>
    <Link href={href}>
      <a className={`link __active-${pathname === href}`}>
        <img className='icon' src={icon}/>
        <span className='text'>{children}</span>
      </a>
    </Link>

    <style jsx>{style}</style>
  </>
}


// language=Stylus
const style = css`
  .link {
    padding 1em 0.7em
    display flex
    flex-direction row
    align-items center
    text-decoration none
    text-transform uppercase
    position relative

    &:before {
      content ''
      display block
      absolute bottom 1em left
      size calc(100% - 1.5em) 0.1em
      background-color #BE4254
      transition transform 0.2s
      margin-left 0.75em
      transform scaleX(0)
    }

    &.__active-true {
      color #BE4254

      &:before {
        transform none
      }
    }

    .text {
      font-size 0.9em
    }

    .icon {
      size 1em
      margin-right 0.5em
    }
  }
`

