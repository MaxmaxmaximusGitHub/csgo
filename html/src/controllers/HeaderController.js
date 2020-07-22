import {observable, action} from "mobx";


export default new class HeaderController {

  @observable
  opened = false

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
