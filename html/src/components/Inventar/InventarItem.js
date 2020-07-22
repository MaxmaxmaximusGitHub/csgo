import Item from "../Item";
import BetController from "../../controllers/BetsController";


export default function InventarItem({item}) {

  function betItem() {
    BetController.add(item)
  }

  return <Item item={item} onClick={betItem}/>
}
