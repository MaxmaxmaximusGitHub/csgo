import {observable, action} from "mobx";


export default new class ChatController {

  @observable
  opened = true

  @action
  open = () => {
    this.opened = true
  }

  @action
  close = () => {
    this.opened = false
  }

  @action
  toggle = () => {
    if (this.opened) this.close()
    else this.open()
  }

}
