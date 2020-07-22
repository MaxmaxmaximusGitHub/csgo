import styles from './MobileHeaderBlurContainer.styl'
import {observer} from 'mobx-react-lite'
import classNames from "classnames";
import HeaderController from "../../../../controllers/HeaderController";


function MobileHeaderBlurContainer({children}) {

  const blurContainerClassName = classNames(
    styles.MobileHeaderBlurContainer, {
      [styles.__headerOpened]: HeaderController.opened
    }
  )

  return <div className={blurContainerClassName}>
    {children}
  </div>
}


export default observer(MobileHeaderBlurContainer)


