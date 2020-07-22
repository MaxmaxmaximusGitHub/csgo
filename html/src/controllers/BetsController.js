import {observable, action,} from "mobx";


export default new class BetController {

  @observable
  items = []

  hasItem = (item) => {
    return this.hasId(item.id)
  }

  @action
  clear = () => {
    this.items = []
  }

  @action
  add = (item) => {
    if(this.items.length >= 3) return
    if (this.hasId(item.id)) return
    this.items.push(item)
  }

  @action
  remove = (item) => {
    this.removeById(item.id)
  }

  hasId = (id) => {
    return this.items.some(item => item.id === id)
  }

  removeById = (id) => {
    const index = this.items.findIndex(item => item.id === id)
    if (index !== -1) this.items.splice(index, 1)
  }

}

