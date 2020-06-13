import sql from 'sql-tag'
import db from './db'


export async function getUserBySteamId(steam_id) {
  const {rows} = await db.query(sql`
    SELECT * FROM "user"
    WHERE steam_id = ${steam_id}
  `)

  if (!rows.length) {
    return null
  }

  return rows[0]
}


export async function getUserById(id) {
  const {rows} = await db.query(sql`
    SELECT * FROM "user"
    WHERE id = ${id}
  `)

  if (!rows.length) {
    return null
  }

  return rows[0]
}


export async function createUser(data) {
  const {steam_id, nickname, avatar, steam_profile, lang, role} = data

  const {rows} = await db.query(sql`
    INSERT INTO "user"
      (steam_id, nickname, avatar, steam_profile, lang, role)
    VALUES 
      (${steam_id}, ${nickname}, ${avatar}, ${steam_profile}, ${lang}, ${role})
    RETURNING *
  `)

  return rows[0]
}




