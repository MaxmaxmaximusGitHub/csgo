import React, { useState, useEffect, useRef } from 'react'
import css from 'styled-jsx/css'


export default function Contacts() {

  return <div className='contacts'>
    <h4>Lorem ipsum dolor</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>

    <h4>Lorem ipsum dolor</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>

    <a href="ddfd">fddf</a>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`
  .contacts {
    align-self stretch
    flex-grow 1
    text-shadow green
    padding 1em
    text-align center

    h4 {
      font-size 1.2em
      margin-top 1.5em
    }

    p {
      color #C3C3C3
      margin-top 0.5em
    }

    a {
      display inline-block
      color #BE4254
      margin-top 1em
    }
  }
`
