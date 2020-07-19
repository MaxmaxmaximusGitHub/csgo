import {action, observable} from "mobx";


export default new class InventarController {

  @observable
  selectedItems = []

  @action
  selectItem = () => {
    console.log('select')
  }

  @action
  unselectItem = () => {
    console.log('unselectItem')
  }

}
