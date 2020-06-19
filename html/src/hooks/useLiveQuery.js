import {useQuery, useSubscription} from "@apollo/react-hooks";


export default function useLiveQuery(query, options = {}) {

  const queryResult = useQuery(query, options)

  useSubscription(toSubscription(query), {
    onSubscriptionData({client, subscriptionData: {data}}) {
      client.writeQuery({query, data, variables: options.variables})
    }
  })

  return queryResult
}


const subscriptionsCache = new WeakMap()

function toSubscription(query) {
  if (subscriptionsCache.has(query)) {
    return subscriptionsCache.get(query)
  }

  let subscription = JSON.parse(JSON.stringify(query))
  subscription.definitions[0].operation = 'subscription'
  subscriptionsCache.set(query, subscription)
  return subscription
}



