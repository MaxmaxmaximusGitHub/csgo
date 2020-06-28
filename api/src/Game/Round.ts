import sql from 'sql-tag'
import db from '../lib/db'


interface GameSettings {
  pending_time: number
  show_time: number
  speed_x: number
}


export default class Round {

  settings: GameSettings
  status = ''
  id = null
  x = 1


  async play() {
    await this.loadSettings()
    await this.createRound()
    await this.pendingBets()
    await this.playRound()
    await this.showResult()
    await this.doneRound()
  }


  async loadSettings() {
    const {rows} = await db.query(sql`
      SELECT *
      FROM game.settings
    `)

    this.settings = rows[0]
  }


  async createRound() {
    const {rows} = await db.query(sql`
      INSERT INTO game.round
        DEFAULT
      VALUES
      RETURNING id
    `)

    this.id = rows[0].id
  }


  async pendingBets() {
    await this.setStatus('pending')
    await this.time(this.settings.pending_time)
  }


  async playRound() {
    await this.setStatus('playing')
    await this.generateX()
    await this.waitXAnimation()
  }


  async generateX() {
    // this.x = Math.round((1 + (Math.random() * 5)) * 100)
    this.x = 200
  }


  async waitXAnimation() {
    const a = this.settings.speed_x / 1000
    const sec = Math.sqrt(((this.x) / 100) / a)
    await this.time(sec * 1000)
  }


  async showResult() {
    await this.setStatus('show')

    await db.query(sql`
      UPDATE game.round
      SET x = ${this.x}
      WHERE id = ${this.id}
    `)

    await this.time(this.settings.show_time)
  }


  async doneRound() {
    await this.setStatus('done')
  }


  async makeBet(user) {
    const money = 100

    if (this.status !== 'pending') {
      throw new Error('Раунд не в ожидании ставок')
    }

    if (await this.userHasBetToThisRound(user)) {
      throw new Error('Вы уже делали ставку в этом раунде')
    }

    const {rows} = await db.query(sql`
      INSERT INTO game.bet
        (round_id, user_id, money)
      VALUES (${this.id}, ${user.id}, ${money})
      RETURNING id 
    `)

    return {
      id: rows[0].id
    }
  }


  private async userHasBetToThisRound(user) {
    const {rows} = await db.query(sql`
      SELECT 1 FROM game.bet
      WHERE round_id = ${this.id} AND user_id = ${user.id}
    `)

    if (rows.length) {
      return true
    }

    return false
  }


  async time(time) {
    await new Promise(resolve => setTimeout(resolve, time))
  }


  private async setStatus(status) {

    if (status === 'pending') {
      await db.query(sql`
        UPDATE game.round
        SET status = ${status}, start_pending_at = now()
        WHERE id = ${this.id}
      `)

    } else if (status === 'playing') {
      await db.query(sql`
        UPDATE game.round
        SET status = ${status}, start_playing_at = now()
        WHERE id = ${this.id}
      `)

    } else if (status === 'show') {
      await db.query(sql`
        UPDATE game.round
        SET status = ${status}, start_show_at = now()
        WHERE id = ${this.id}
      `)

    } else {
      await db.query(sql`
      UPDATE game.round
      SET status = ${status}
      WHERE id = ${this.id}
    `)
    }

    this.status = status
  }

}

