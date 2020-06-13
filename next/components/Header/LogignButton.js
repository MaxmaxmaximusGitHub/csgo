import Button from "../Widgets/Button";
import steamIcon from "../../res/images/steam.svg";
import css from "styled-jsx/css";


export default function LoginButton() {
  return <a className='login-button' href="/auth/steam" target="_self">
    <Button icon={steamIcon}>Войти через стим</Button>
    <style jsx>{style}</style>
  </a>
}


// language=Stylus
const style = css`
  .login-button {
    margin-left 1.5em
    display flex
    flex-direction row
    align-items center
    margin-right 1em
    text-decoration none
  }
`
