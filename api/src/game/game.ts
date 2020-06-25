import sql from 'sql-tag'
import db from '../lib/db'
import GameRound from './GameRound'


class Game {

  constructor() {
    this.start()
  }


  async start() {
    await this._stopNotDonnedGames()
    this.startGameLoop()
  }


  async startGameLoop() {
    while (true) {
      let gameRound = new GameRound()
      await gameRound.play()
    }
  }


  async _stopNotDonnedGames() {
    await db.query(sql`
      UPDATE "game_round"
      SET status = 'done'
      WHERE status <> 'done'
    `)
  }

}


export default new Game()

