import ActionsController from "../lib/ActionsController";
import db from "../lib/db"
import Game from "./Game"
import sql from "sql-tag"
import ItemsDataLoader from "./ItemsDataLoader";


ActionsController.add('game_make_bet', async (user, data) => {
  return Game.makeBet(user)
})


ActionsController.add('update_items_data', async () => {
  await ItemsDataLoader.update()
  return {id: 1}
})


ActionsController.add('buy_item', async (user, {item_data_id}) => {

  const {rows: [item_data]} = await db.query(sql`
    SELECT price, active from game.item_data
    WHERE id = ${item_data_id}
  `)

  if (!item_data.active) {
    throw new Error('Этот айтем не активен')
  }

  if (item_data.price > Number(user.money)) {
    throw new Error('Недостатаочно денег')
  }

  const {rows: [item]} = await db.query(sql`
    WITH 
         
    item_data AS (
      SELECT price from game.item_data
      WHERE id = ${item_data_id}
      AND active = true
    ),
         
    minus_money_from_user AS (
      UPDATE public."user"
      SET money = money - (SELECT price FROM item_data)
      WHERE id = ${user.id} 
    )
    
    INSERT INTO game.item
      (user_id, item_data_id)
    VALUES
       (${user.id}, ${item_data_id})
    RETURNING 
      id
  `)

  return {id: item.id}
})


ActionsController.add('sell_item', async (user, {id}) => {

  const {rows: [{count}]} = await db.query(sql`
    SELECT count(*) FROM game.item
    WHERE user_id = ${user.id}
    AND id = ${id}
  `)

  if (!Number(count)) {
    throw new Error("Данный предмет отосутствует у вас в инвентаре")
  }

  await db.query(sql`
    WITH 
       
    saled_item AS (
      DELETE FROM game.item
      WHERE user_id = ${user.id}
      AND id = ${id}
      RETURNING item_data_id
    ),
     
   saled_item_data AS (
     SELECT price FROM game.item_data
     WHERE id = (SELECT item_data_id FROM saled_item)
   )

    UPDATE public."user"
    SET money = money + (SELECT price FROM saled_item_data)
  `)

  return {id}
})


