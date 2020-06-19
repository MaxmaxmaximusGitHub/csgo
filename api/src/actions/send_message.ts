import Actions from "../lib/Actions"
import db from '../lib/db'
import sql from 'sql-tag'


Actions.add('send_message', async (data, user) => {

  console.log('data, user', data, user)

  const {text} = data

  const {rows} = await db.query(sql`
    INSERT INTO "chat_message" 
    (text)
    VALUES (${text})
    RETURNING id
  `)

  console.log('rows', rows)

  return {id: 11}
})



