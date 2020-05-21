import React, { useState, useEffect, useRef } from 'react'
import discountIcon from 'res/images/discount.svg'
import Button from "../Widgets/Button"
import PromoTitle from "./PromoTitle"
import css from 'styled-jsx/css'


export default function PromoCode() {


  return <div className='promo-code'>

    <PromoTitle
      icon={ discountIcon }
      title='Промокод'
      description="Если Вы знаете секретный промокод
      - введите его и получите бонусный предмет!"
    />

    <div className='promo-input'>
      <input className='input' type="text" placeholder='Введите промокод'/>
      <Button>Сохранить</Button>
    </div>

    <style jsx>{ style }</style>
  </div>
}


// language=Stylus
const style = css`  
  .promo-code {
    
    .promo-input {
      margin-top 1.5em
      border-radius 0.5em
      background-color #353B6A
      padding 1em
      display flex
      flex-direction row

      .input {
        flex-grow 1
        margin-right 1em
        border-radius 0.5em
        background-color #191B39
        line-height 3.5em
        padding 0 2em

        &::placeholder {
          color white
        }
      }
    }
  }
`