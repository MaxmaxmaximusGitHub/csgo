import ActionsController from "../lib/ActionsController";
import db from "../lib/db";
import sql from 'sql-tag'


const STEP = 5000000


ActionsController.add('money_minus', async () => {

  const {rows} = await db.query(sql`
    UPDATE public."user"
    SET money = money - ${STEP}
    RETURNING money
  `)

  return {money: rows[0].money}
})


ActionsController.add('money_plus', async () => {

  const {rows} = await db.query(sql`
    UPDATE public."user"
    SET money = money + ${STEP}
    RETURNING money
  `)

  return {money: rows[0].money}
})

