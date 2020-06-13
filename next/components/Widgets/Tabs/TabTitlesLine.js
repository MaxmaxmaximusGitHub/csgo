import css from 'styled-jsx/css'


export default function TabTitlesLine({size}) {

  const lineStyle = {
    width: size.width,
    transform: `translateX(${size.offsetLeft}px)`
  }

  return <div className='line-container'>

    <div
      className="line"
      style={lineStyle}>
    </div>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .line-container {
    $time = 0.3s
    background-color #373B70

    .line {
      height 0.1em
      background-color #656ca5
      transition transform $time, width $time
    }
  }
`
