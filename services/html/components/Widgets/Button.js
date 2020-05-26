import css from 'styled-jsx/css'


export default React.forwardRef(
  function Button({onClick, icon, children, ...props}, ref) {

    return <div
      ref={ ref }
      className='button' onClick={ onClick } { ...props }>

      <span className="text">{ children }</span>
      { icon && <img className='icon' src={ icon }/> }

      <style jsx>{ style }</style>
    </div>

  }
)


// language=Stylus
const style = css`
  .button {
    padding 0.7em 1em
    border-radius 0.5em
    cursor pointer
    border 0.15em solid #63AA7F
    background-color rgba(#63A97F, 0.2)
    outline none
    display inline-flex
    flex-direction row
    align-items center
    text-transform uppercase
    transition box-shadow 0.2s, background-color 0.2s
    user-select none

    &:hover {
      background-color rgba(#36c16d, 0.3)
      box-shadow 0 0.5em 1.5em rgba(#26ac5b, 0.3)
    }

    .text {
      font-size 0.9em
    }

    .icon {
      margin-left 1em
    }
  }
`
