import styles from './MobileHeader.styl'
import MobileNav from "./MobileNav";
import classNames from 'classnames'
import ToggleButton from "./MobileHeaderButton";
import HeaderController from "../../../../controllers/HeaderController";
import {observer} from "mobx-react-lite";
import SocialNetworks from "./SocialNetworks";
import MobileLoginButton from "./MobileLoginButton";
import MobileHeaderLogo from "./MobileHeaderLogo";


function MobileHeader({pages}) {

  const {opened} = HeaderController

  const className = classNames(styles.MobileHeader, {
    [styles.__opened]: opened
  })

  return <div className={className}>

    <div className={styles.panel}>

      <MobileHeaderLogo/>

      <div className={styles.loginButtonInPanel}>
        <MobileLoginButton/>
      </div>

      <ToggleButton/>

    </div>

    <div className={styles.content}>
      <MobileNav pages={pages}/>

      <div className={styles.loginButtonInContent}>
        <MobileLoginButton style={{
          padding: '0.5em 1em',
          borderRadius: '1em'
        }}/>
      </div>

      <SocialNetworks/>
    </div>

  </div>
}


export default observer(MobileHeader)

