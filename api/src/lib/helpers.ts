import sql from 'sql-tag'
import db from './db'
import {UserInput} from "./types";


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


export async function createUser(data: UserInput) {
  const {steam_id, steam_profile, nickname, avatar, lang, role} = data

  const {rows} = await db.query(sql`
    INSERT INTO "user"
      (steam_id, steam_profile, nickname, avatar, lang, role)
    VALUES 
      (${steam_id}, ${steam_profile}, ${nickname}, ${avatar}, ${lang}, ${role})
    RETURNING *
  `)

  return rows[0]
}




