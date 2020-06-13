import css from 'styled-jsx/css'
import {useState} from "react";
import useBrowserEffect from "../../hooks/useBrowserEffect";


export default function GameHistoryItem() {

  const [show, setShowX] = useState(false)
  useBrowserEffect(() => setShowX(true))

  var x = (Math.random() * 10).toFixed(2)

  if (x >= 0) var color = '#DA68DE'
  if (x >= 3) color = 'red'
  if (x >= 6) color = 'greenyellow'
  if (x >= 8) color = 'yellow'


  return <div className='game-item'>
    <div className='game-id'>ID 1233</div>

    {show && <>
      <div className="game-x" style={{color}}>{x}x</div>
      <div className="game-date">10 апреля 2020г. 23:20</div>
    </>}

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .game-item {
    size 7.5em 9em
    background-color #2C3255
    border-radius 0.5em
    //margin-right 1em
    //margin-bottom 1em
    margin 0.5em
    cursor pointer
    display flex
    flex-direction column
    align-items center
    justify-content center
  }

  .game-item:hover {
    background-color #373E64
    box-shadow inset 0 0 0 0.15em #5A6098, 0 0.5em 1em rgba(#5A6098, 0.2)
  }


  .game-id {
    margin-bottom 0.5em
  }

  .game-x {
    background-color #373e64
    padding 0.25em 0.5em
    border-radius 0.5em
    border 0.1em solid #424879
    margin-top 1em
  }

  .game-item:hover > .game-x {
    background-color #2C3255
  }

  .game-date {
    color #5A6098
    font-size 0.8em
    margin-top 1em
    text-align center
  }
`

