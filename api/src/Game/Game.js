import sql from 'sql-tag'
import db from '../lib/db'
import Round from './Round'


export default class Game {


  static async start() {
    await this.stopActiveGames()

    // start game loop
    while (true) {
      await this.playRound()
    }
  }


  static async playRound() {
    this.activeRound = new Round()
    await this.activeRound.play()
  }


  static async stopActiveGames() {
    await db.query(sql`
      UPDATE game.round
      SET status = 'error'
      WHERE status <> 'done'
    `)
  }


  static async makeBet(user, items_ids) {
    if (!this.activeRound) {
      throw new Error('Дождитесь ожидания ставок')
    }

    return this.activeRound.makeBet(user, items_ids)
  }

}

Game.start()
