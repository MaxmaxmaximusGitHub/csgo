import {action, observable} from "mobx";


export default class InventarModel {

  @observable
  static selectedItems = []

  @action.bound
  static selectItem() {
    console.log('select')
  }

  @action.bound
  static unselectItem() {
    console.log('unselectItem')
  }

}
