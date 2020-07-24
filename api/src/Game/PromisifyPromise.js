export default class PromisifyPromise extends Promise {

  constructor(handler = null) {
    var resolve = null
    var reject = null

    super((_resolve, _reject) => {
      resolve = _resolve
      reject = _reject

      if (typeof handler === 'function') {
        handler(_resolve, _reject)
      }
    })

    this.done = false

    this.resolve = (value) => {
      this.done = true
      resolve(value)
    }

    this.reject = (value) => {
      this.done = true
      reject(value)
    }
  }


}
