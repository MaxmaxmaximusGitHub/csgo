class Tracker {

  constructor({types}) {
    this.depTypes = this._normalizeDepTypes(types)
    this.deps = []
  }


  depend(type, options) {
    const DepConstructor = this._getDepConstructor(type)
    const dep = new DepConstructor(options)
    this.deps.push(dep)
  }


  change(type, options) {

  }


  _getDepConstructor(type) {
    const DepConstructor = this.depTypes[type]
    if (!DepConstructor) {
      throw new Error(`Dependency type "${ type }" not exists`)
    }
    return DepConstructor
  }

  _normalizeDepTypes(types) {
    const depTypes = {}
    for (let DepConstructor of types) {
      depTypes[DepConstructor.type] = DepConstructor
    }
    return depTypes
  }
}

class ModelDependency {
  static type = 'model'

  constructor() {

  }
}


let tracker = new Tracker({
  types: [ModelDependency]
})


tracker.depend('model', {
  id: ['is', 'fddfdf'],
  age: ['gt', 10]
})


tracker.change('model', {
  id: 11
})




