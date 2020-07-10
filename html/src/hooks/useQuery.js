import {useQuery as apolloUseQuery} from "@apollo/react-hooks";


export default function useQuery(query, options = {}) {
  const queryResult = apolloUseQuery(query, options)
  return wrapQueryResult(queryResult, options)
}


function wrapQueryResult({data, fetchMore}, {cursor = {}}) {

  const {prop = 'id'} = cursor

  if (!data) var arr = []
  else arr = data[Object.keys(data)[0]]


  arr.next = () => {
    if (!arr.length) return

    const lastItem = arr[arr.length - 1]

    fetchMore({
      variables: {
        cursor: lastItem[prop],
      },
      updateQuery(prev, {fetchMoreResult}) {
        // console.log('load more', fetchMoreResult)
        return mergeFetchMoreResult(prev, fetchMoreResult)
      }
    })
  }

  return arr
}


function mergeFetchMoreResult(prev, fetchMoreResult) {
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


