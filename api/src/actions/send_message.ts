import ActionsController from "../lib/actionsController"
import db from '../lib/db'
import sql from 'sql-tag'


ActionsController.add('send_message', async (data, user) => {

  const {text} = data
  const userId = user.id

  const {rows} = await db.query(sql`
    INSERT INTO "chat_message" 
    (text, author_id)
    VALUES (${text}, ${userId})
    RETURNING id
  `)

  return {id: rows[0].id}
})



