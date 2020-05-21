import css from 'styled-jsx/css'
import GamesHistory from "./GamesHistory"
import historyIcon from 'res/images/history-white.svg'
import Page from "../Widgets/Page"


export default function HistoryPage() {

  return <Page>

    <div className="history-page">
      <h1 className='title'>История</h1>

      <h2 className='description'>
        На этой странице отображается история игр
      </h2>

      <GamesHistory/>
    </div>

    <style jsx>{ style }</style>
  </Page>
}


// language=Stylus
const style = css`
  .history-page {
    display flex
    flex-direction column
    flex-grow 1
    margin-bottom 3em
    padding-left 5em
    padding-right 1em
  }

  .title {
    margin-top 1em
    font-size 1.5em
    font-weight 600
    display flex
    flex-direction row
    align-items center
  }

  .title:before {
    content ''
    display inline-block
    size 1em
    margin-right 0.3em
    background-size contain
    background-position center
    background-repeat no-repeat
    background-image url(${ historyIcon })
  }

  .description {
    color #5A6098
    margin-bottom 1em
    margin-top 0.7em
    font-size 0.9em
  }
`

