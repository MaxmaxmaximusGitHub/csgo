import ActionsController from "../lib/ActionsController";
import db from "../lib/db"
import Game from "./Game"
import sql from "sql-tag"


ActionsController.add('game_make_bet', async (user, data) => {
  return Game.makeBet(user)
})


ActionsController.add('buy_skin', async (user, {skin_id}) => {

  const {rows: [skin]} = await db.query(sql`
    SELECT price from game.skin
    WHERE id = ${skin_id}
  `)

  if (skin.price > Number(user.money)) {
    throw new Error('Недостатаочно денег')
  }

  const {rows: [skinInventar]} = await db.query(sql`
    WITH skin AS (
      SELECT price from game.skin
      WHERE id = ${skin_id}
    ),
         
    minus_money_from_user AS (
      UPDATE public."user"
      SET money = money - (SELECT price FROM skin)
      WHERE id = ${user.id} 
    )
    
    INSERT INTO game.skin_inventar
      (user_id, skin_id)
    VALUES
       (${user.id}, ${skin_id})
    RETURNING 
      id
  `)

  return {
    id: skinInventar.id
  }
})

