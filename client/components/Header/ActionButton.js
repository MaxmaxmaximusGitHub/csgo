import css from 'styled-jsx/css'


export default function ActionButton({icon, indicator, bg = true, ...props}) {

  let inlineStyle = {}

  if (icon) {
    inlineStyle.backgroundImage = `url(${ icon })`
  }

  return <div
    className={ `action-button __with-bg-${ bg }` }
    style={ inlineStyle } { ...props }>

    { indicator && <div className='indicator'></div> }

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .action-button {
    size 2em
    margin 0 0.3em
    background-repeat no-repeat
    background-position center
    background-size contain
    background-origin content-box
    padding 0.4em
    box-sizing border-box
    cursor pointer
    border none
    outline none
    border-radius 0.5em
    position relative

    &.__with-bg-true {
      background-color #373D6E
    }

    &:hover {
      background-color #404782
    }

    .indicator {
      background-color #BE4254
      absolute top 0 right 0
      size 0.4em
      border-radius 50%
      box-shadow 0 0 0 0.2em #2F3364
    }
  }
`

