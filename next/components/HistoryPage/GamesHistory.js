import css from 'styled-jsx/css'
import useRepeat from "../../hooks/useRepeat";
import GameHistoryItem from "./GameHistoryItem";
import List from "../Widgets/List";


export default function GamesHistory() {

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  }

  return <List style={listStyle} withoutPadding={true}>
    {useRepeat(100, index =>
      <GameHistoryItem key={index}/>)
    }

    <style jsx>{style}</style>
  </List>
}


// language=Stylus
const style = css`
  .games-history {
    flex-grow 1
    align-self stretch
    overflow auto
    height 0
    display flex
    flex-wrap wrap
    justify-content center
  }
`
