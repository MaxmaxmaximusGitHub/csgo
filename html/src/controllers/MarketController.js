import {action, observable} from "mobx";


export default new class MarketController {

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

}
