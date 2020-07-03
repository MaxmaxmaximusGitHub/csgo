import sql from 'sql-tag'
import db from './db'
import {UserInput} from "./types";


export async function getUserBySteamId(steam_id) {
  const {rows: [user = null]} = await db.query(sql`
    SELECT * FROM "user"
    WHERE steam_id = ${steam_id}
  `)

  return user
}


export async function getUserById(id) {
  const {rows: [user = null]} = await db.query(sql`
    SELECT * FROM "user"
    WHERE id = ${id}
  `)

  return user
}


export async function createUser(data: UserInput) {
  const {steam_id, steam_profile, nickname, avatar, lang, role} = data

  const {rows: [user]} = await db.query(sql`
    INSERT INTO "user"
      (steam_id, steam_profile, nickname, avatar, lang, role)
    VALUES 
      (${steam_id}, ${steam_profile}, ${nickname}, ${avatar}, ${lang}, ${role})
    RETURNING *
  `)

  return user
}




