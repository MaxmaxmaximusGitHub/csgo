import styles from './Confirm.styl'
import Button from "./Button";
import Popup from "./Popup";


export const ConfirmContext = React.createContext({})


export default function Confirm() {

  const context = useContext(ConfirmContext)
  const [opened, setOpened] = useState(false)
  const [options, setOptions] = useState({})
  const {message, onConfirm, onReject} = options

  context.setData = function (newOptions) {
    setImmediate(() => {
      setOptions(newOptions)
      open()
    })
  }

  function confirm() {
    onConfirm()
    close()
  }

  function reject() {
    onReject()
    close()
  }

  function open() {
    setOpened(true)
  }

  function close() {
    setOpened(false)
  }

  return <Popup opened={opened} onClose={reject}>
    <div className={styles.confirm}>
      <div className={styles.message}>{message || 'Вы уверены?'}</div>

      <div className={styles.variants}>
        <Button onClick={confirm}>Да</Button>
        <Button onClick={reject}>Нет</Button>
      </div>
    </div>
  </Popup>
}
