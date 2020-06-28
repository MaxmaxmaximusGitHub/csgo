import {ConfirmContext} from "../components/Confirm";


export default function useConfirm(...args) {

  const context = useContext(ConfirmContext)
  const [opened, setOpened] = useState(false)
  const {message, onConfirm, onReject} = normalizeOptions(args)

  const open = () => {
    setOpened(true)
  }

  const close = () => {
    setOpened(false)
  }

  if (opened) {
    context.setData({
      message,

      onConfirm() {
        onConfirm && onConfirm()
        close()
      },

      onReject() {
        onReject && onReject()
        close()
      }
    })
  }

  return [open, close]
}


function normalizeOptions(args) {
  if (typeof args[0] === 'object') {
    return args[0]
  }

  if (typeof args[0] === 'function') {
    var message = null
    var onConfirm = args[0]
    var onReject = args[1]
  } else {
    var message = args[0]
    var onConfirm = args[1]
    var onReject = args[2]
  }

  return {
    message,
    onConfirm,
    onReject
  }

}

