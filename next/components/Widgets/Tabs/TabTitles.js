import css from 'styled-jsx/css'
import TabTitle from "./TabTitle"
import useSize from "../../../hooks/useSize";
import TabTitlesLine from "./TabTitlesLine";


export default function TabTitles({tabs, onTitleClick}) {

  const [activeTabRef, activeTabSize] = useSize('width', 'offsetLeft')

  const titles = tabs.map((tab, index) =>
    <TabTitle
      key={index}
      active={tab.props.active}
      ref={tab.props.active ? activeTabRef : null}
      onClick={() => onTitleClick(index)}>
      {tab.props.title}
    </TabTitle>
  )


  return <div className='tab-titles'>

    <div className="titles">{titles}</div>
    <TabTitlesLine size={activeTabSize}/>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .tab-titles {
    margin 0 2em

    .titles {
      display flex
      flex-direction row
      justify-content center
      position relative
      padding 0 2em
    }
  }
`
