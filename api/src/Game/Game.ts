import sql from 'sql-tag'
import db from '../lib/db'
import Round from './Round'


export default class Game {


  private static activeRound: Round


  static async start() {
    await this.stopActiveGames()

    // start game loop
    while (true) {
      await this.playRound()
    }
  }


  private static async playRound() {
    this.activeRound = new Round()
    await this.activeRound.play()
  }


  private static async stopActiveGames() {
    await db.query(sql`
      UPDATE game.round
      SET status = 'error'
      WHERE status <> 'done'
    `)
  }


  static async makeBet(user) {

    if (!this.activeRound) {
      throw new Error('Отсутствует активный раунд')
    }

    return this.activeRound.makeBet(user)
  }

}

