import styles from './DesktopAdminPage.styl'
import {observer} from 'mobx-react-lite'
import Button from "../../../../components/Button";
import {useMutation} from "@apollo/react-hooks";
import {GET_TWO_FA} from "../../../../graphql/mutations";


function DesktopAdminPage() {

  const [getTwoFa] =  useMutation(GET_TWO_FA)

  return <div className={styles.DesktopAdminPage}>
    <Button onClick={getTwoFa}>2fa</Button>
  </div>
}


export default observer(DesktopAdminPage)
