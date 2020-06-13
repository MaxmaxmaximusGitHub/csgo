import css from 'styled-jsx/css'


export default function GameRightPanel() {

  return <div className='game-right-panel'>
    GameRightPanel
    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .game-right-panel {
    flex-grow 1
    display flex
    flex-direction column
    justify-content center
    align-items center
  }
`
