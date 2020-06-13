import css from 'styled-jsx/css'
import Game from "../components/HomePage/Game"


export default function HomePage() {

  return <div className='home-page'>

    <Game/>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .home-page {
    flex-grow 1
    display flex
    flex-direction row
    //background-image linear-gradient(#2A2E58, #262A53)
  }
`
