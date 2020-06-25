import sql from 'sql-tag'
import db from '../lib/db'


export default class GameRound {

  FILLING_USERS_TIME: Number = 2000
  id: String = null


  async play() {
    await this.createRound()
    await this.waitFillingUsers()
    await this.playRound()
  }


  async createRound() {
    const {rows} = await db.query(sql`
      INSERT INTO "game_round"
        DEFAULT
      VALUES
      RETURNING id
    `)

    this.id = rows[0].id
  }


  async waitFillingUsers() {
    await this.time(this.FILLING_USERS_TIME)
  }


  async playRound() {
    console.log('playRound')
    // db.query(sql`
    //
    // `)
  }


  async time(time) {
    await new Promise(resolve => setTimeout(resolve, time))
  }

}

