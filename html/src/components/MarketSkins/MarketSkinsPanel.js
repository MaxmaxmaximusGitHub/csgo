import styles from './MarketSkinsPanel.styl'
import toMoney from "../../filters/toMoney";
import useCurrentUser from "../../hooks/useCurrentUser";
import Button from "../Button";


export default function MarketSkinsPanel({closeMarket, search, setSearch}) {

  const user = useCurrentUser()

  function onSearchChange(event) {
    setSearch(event)
  }

  return <div className={styles.MarketSkinsPanel}>
    <input
      type="text" placeholder="Поиск..."
      value={search} onChange={onSearchChange}
    />

    {user && <div>
      Ваш баланс {toMoney(user.money)}
    </div>}

    <Button onClick={closeMarket}>Закрыть</Button>
  </div>
}


