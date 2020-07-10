import styles from './MyItems.styl'
import {observer} from 'mobx-react-lite'
import List from "../List";
import MyItem from "./MyItem";
import useMyItems from "../../hooks/useMyItems";


export default observer(function MyItems({search}) {

  const items = useMyItems(search)

  const emptyMessageText = search
    ? `Поиск "${search}" ничего не дал...`
    : 'Ваш инвентарь пуст'

  const emptyMessage = <div className={styles.emptyMessage}>
    {emptyMessageText}
  </div>


  return <List
    className={styles.MyItems}
    list={items}
    emptyMessage={emptyMessage}>

    {item =>
      <MyItem item={item}/>
    }
  </List>
})


