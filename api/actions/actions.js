import actions from "../lib/actions"
import db from '../lib/db'
import sql from 'sql-tag'


actions.add('moneyPlus', async (data, user) => {

  console.log('user', user)

  const {rows} = await db.query(sql`
    UPDATE "user"
    SET money = money + 2
    WHERE id = ${data.id}
    RETURNING money
  `)

  return {
    money: rows[0].money
  }
})


actions.add('moneyMinus', async (data, user) => {
  const {rows} = await db.query(sql`
    UPDATE "user"
    SET money = money - 2
    RETURNING money
  `)

  return {
    money: rows[0].money
  }
})



