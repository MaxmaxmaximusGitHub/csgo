import css from 'styled-jsx/css'
import Link from "next/link"


export default function SocialNetwork({href, icon}) {

  // return <>
  //   <Link href={ href }>
  //     <a className='social-network' target='_blank'>
  //       <img className='social-network-icon' src={ icon }/>
  //     </a>
  //   </Link>
  //
  //   <style jsx>{ style }</style>
  // </>

  return <>
    <div className="lol"></div>

    <style jsx>{ style }</style>
  </>
}


// language=Stylus
const style = css`

  .lol {
    background-color red
    size 1em
    margin 0.5em
    background-image url('res/images/discord.svg')
    -svg-mixer-fill: #028bf4;
  }

  .social-network {
    display block

    & + & {
      margin-left 1em
    }

    &:hover {
      .social-network-icon {
        transform scale(1.2)
      }
    }

    .social-network-icon {
      size 1.5em
      transition transform 0.1s
    }
  }
`

