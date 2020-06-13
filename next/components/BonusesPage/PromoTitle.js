import React from 'react'
import css from 'styled-jsx/css'


export default function PromoTitle(props) {

  const {title, icon, description, iconPadding = 0} = props

  const iconStyle = {
    padding: `${iconPadding}em`
  }

  return <>
    <h4 className='title'>
      <img src={icon} style={iconStyle} className='icon'/>
      <span className='text'>{title}</span>
    </h4>

    <div className='description'>
      {description}
    </div>

    <style jsx>{style}</style>
  </>
}


// language=Stylus
const style = css`
  .title {
    display flex
    flex-direction row
    align-items center
    margin-top 3em

    .icon {
      size 1.5em
      margin-right 0.3em
      background-origin content-box
    }

    .text {
      font-size 1.2em
    }
  }

  .description {
    color #7E7E7E
    margin-top 0.75em
    line-height 1.3em
  }
`

