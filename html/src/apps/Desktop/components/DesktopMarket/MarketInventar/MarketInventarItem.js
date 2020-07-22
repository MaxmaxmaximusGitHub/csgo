import useNotificator from "../../../../../hooks/useNotificator";
import {useMutation} from "@apollo/react-hooks";
import {SELL_ITEM} from "../../../../../graphql/mutations";
import {GET_MY_ITEMS} from "../../../../../graphql/queries";
import Item from "../../../../../components/Item";


export default function MarketInventarItem({item}) {

  const notificator = useNotificator()

  const [sellItem] = useMutation(SELL_ITEM, {
    variables: {item_id: item.id},
    refetchQueries: [{query: GET_MY_ITEMS}],
    onCompleted() {
      notificator.alert('Продано')
    }
  })

  return <Item item={item} onClick={sellItem}/>
}

