import {action, observable} from "mobx";


export default new class MarketModel {

  @observable
  opened = false

  @action.bound
  open() {
    this.opened = true
  }

  @action.bound
  close() {
    this.opened = false
  }

}
