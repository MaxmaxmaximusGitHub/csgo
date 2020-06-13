import css from 'styled-jsx/css'
import arrowTopIcon from 'res/images/arrow.svg'


export default function LangSelect() {

  return <div className='language-select'>
    <div className="current-lang">RU</div>
    <div className="show-all-languages-button"></div>
    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .language-select {
    background-color #191B39
    border-radius 0.5em
    padding 0.4em 0.5em
    display flex
    margin-right 0.8em
    flex-direction row
    align-items center
    cursor pointer
    
    &:hover{
      background-color #404782
    }

    .current-lang {
      color #5A6098
      font-size 0.9em
    }

    .show-all-languages-button {
      size 0.6em
      margin-left 0.3em
      background-size contain
      background-position center
      background-repeat no-repeat
      background-image url(${arrowTopIcon})
    }
  }
`
