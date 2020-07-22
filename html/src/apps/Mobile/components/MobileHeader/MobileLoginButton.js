import styles from './MobileLoginButton.styl'
import {observer} from 'mobx-react-lite'
import Button from "../../../../components/Button"
import steamIcon from 'res/images/steam.svg'
import classNames from 'classnames'


function MobileLoginButton({...props}) {


  function onClick() {
    location.href = '/auth/steam'
  }

  return <Button onClick={onClick} {...props}>
      Войти через
      <img className={styles.steamIcon} src={steamIcon}/>
    </Button>
}


export default observer(MobileLoginButton)


