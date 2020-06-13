import React from 'react'
import css from 'styled-jsx/css'
import BonusNickLevel from "./BonusNickLevel";


export default function BonusNickLevels({activeLevel = -1}) {

  const bonusLevels = [
    {percent: 10, days: 1},
    {percent: 11, days: 7},
    {percent: 12, days: 14},
    {percent: 13, days: 21},
    {percent: 14, days: 28},
    {percent: 15, days: 35},
  ]

  return <div className='bonus-nick-levels'>
    {bonusLevels.map(({percent, days}, index) =>
      <BonusNickLevel
        key={index}
        active={index <= activeLevel}
        current={index === activeLevel}
        percent={percent} days={days}
      />
    )}
    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .bonus-nick-levels {
    display flex
    flex-direction row
    justify-content space-between
    margin-top 1.5em
  }
`
