import React from 'react'
import Roll from "../Widgets/Roll";
import css from 'styled-jsx/css'


export default function BonusesFAQ() {

  const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscin
    Lorem ipsum dolor sit amet, consectetur adipiscin
    Lorem ipsum dolor sit amet, consectetur adipiscin
    Lorem ipsum dolor sit amet, consectetur adipiscin
    Lorem ipsum dolor sit amet, consectetur adipiscin
  `

  return <div className='bonuses-faq'>

    <div className="roll-group">
      <h3>Как работает бонусная система</h3>

      <Roll title='Lorem ipsum dolor?'>
        {text}{text}{text}{text}{text}{text}{text}{text}
      </Roll>

      <Roll title='Lorem ipsum dolor?'>
        {text}
      </Roll>
    </div>


    <div className="roll-group">
      <h3>FAQ</h3>

      <Roll title='Lorem ipsum dolor?'>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Roll>

      <Roll title='Lorem ipsum dolor?'>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Roll>

      <Roll title='Lorem ipsum dolor?'>
        {text}
      </Roll>
    </div>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`

  .bonuses-faq {
    background-color #191B39
    width 39em
    padding 2.5em 1em
    overflow-y scroll
    height 100%
    border-radius 0.5em
    padding-left 2em

    .roll-group + .roll-group {
      margin-top 2em
    }

    h3 {
      text-transform uppercase
      margin 0.75em 0
    }
  }
`
