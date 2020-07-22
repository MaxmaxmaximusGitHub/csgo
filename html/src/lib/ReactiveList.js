export default class ReactiveList extends Array {


  constructor(length = 0, queryResult, options) {
    super(length)

    if (!queryResult) return

    const {cursor = {}} = options
    const {data, fetchMore} = queryResult

    this.options = {
      cursorProp: cursor.prop || 'id',
      fetchMore: fetchMore,
      lastCursorValue: undefined,
    }

    if (data) {
      const items = data[Object.keys(data)[0]]
      this.push(...items)
    }

  }


  filter() {
    const reactiveList = super.filter(...arguments)
    reactiveList.options = this.options
    return reactiveList
  }


  next = () => {
    if (!this.length) return

    const lastItem = this[this.length - 1]
    const cursorValue = lastItem[this.options.cursorProp]

    if (cursorValue === this.options.lastCursorValue) {
      return
    }

    this.options.lastCursorValue = cursorValue
    this.options.fetchMore({
      variables: {cursor: cursorValue},
      updateQuery: (prev, {fetchMoreResult}) => {
        return this.mergeFetchMoreResult(prev, fetchMoreResult)
      }
    })
  }


  mergeFetchMoreResult(prev, fetchMoreResult) {
    const keys = Object.keys(fetchMoreResult)
    const key = keys[0]
    const prevArr = prev[key]
    const newArr = fetchMoreResult[key]
    const mergedArr = [...prevArr]

    newArr.forEach(item => {
      const has = prevArr.some(it => it.id === item.id)
      if (!has) mergedArr.push(item)
    })

    return {[key]: mergedArr}
  }


}

