import React, { useState, useEffect, useRef } from 'react'
import css from 'styled-jsx/css'
import toDays from "../../lib/filters/toDays";
import classes from "../../lib/classes";


export default function BonusNickLevel({percent, days, active, current}) {

  const levelClasses = classes('bonus-nick-level', {
    __active: active,
    __current: current,
  })

  return <div className={ levelClasses }>
    <div className="percent">{ percent }%</div>
    <div className="days">{ toDays(days) }</div>

    { current && <div className='current-label'>Ваш бонус</div> }

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .bonus-nick-level {
    background-color #353B6A
    opacity 0.6
    size 5.8em 7.6em
    display flex
    align-items center
    flex-direction column
    justify-content space-around
    padding 1em 0
    border-radius 0.5em
    position relative
    transition box-shadow 0.5s

    &.__active {
      opacity 1
      background-color #3d4479
      border 0.15em solid #535b9f

      .days {
        color white
      }

      &:hover {
        box-shadow 0 0.5em 1.5em rgba(#535b9f, 0.6)
      }
    }

    &.__current {
      background-color #535b9f
      border 0.15em solid #6f78c4
      box-shadow 0 0.5em 1.5em rgba(#535b9f, 0.4)
    }

    .percent {
      font-size 1.5em
    }

    .days {
      color #7E7E7E
      font-size 0.9em
    }

    .current-label {
      font-size 0.65em
      width 100%
      text-align center
      absolute left bottom
      margin-bottom -1.9em
      color #6f78c4
      text-transform uppercase
    }
  }
`
