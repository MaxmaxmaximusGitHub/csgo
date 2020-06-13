import css from 'styled-jsx/css'


export default function GameLeftPanel() {

  return <div className='game-left-panel'>
    GameLeftPanel

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .game-left-panel {
    width 25em
    display flex
    flex-direction column
    justify-content center
    align-items center
    background-image url('res/images/bomb.png') , linear-gradient(#232749, transparent)
    background-repeat no-repeat
    background-position top
    background-size contain
  }
`
