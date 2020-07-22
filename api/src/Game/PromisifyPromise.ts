export default class PromisifyPromise extends Promise<any> {

  resolve
  reject

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

    this.resolve = resolve
    this.reject = reject
    return
  }


}
