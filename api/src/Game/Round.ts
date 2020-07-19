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
    this.x = 0
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


  async makeBet(user, items_ids = []) {
    await this.validateBetParams(user, items_ids)

    await this.takeItemsFromUser(user, items_ids)
    const money = await this.getItemsMoney(items_ids)

    const {rows: [{id}]} = await db.query(sql`
      INSERT INTO game.bet
        (round_id, user_id, money)
      VALUES (${this.id}, ${user.id}, ${money})
      RETURNING id 
    `)

    return {id}
  }


  private async validateBetParams(user, items_ids) {
    if (!items_ids.length) {
      throw new Error('Не выбранны айтемы для ставки')
    }

    if (items_ids.length > 3) {
      throw new Error('Слишком много айтемов для ставки')
    }

    if (this.status !== 'pending') {
      throw new Error('Раунд не в ожидании ставок')
    }

    if (await this.userHasBetToThisRound(user)) {
      throw new Error('Вы уже делали ставку в этом раунде')
    }

    if (!await this.isUserItems(user, items_ids)) {
      throw new Error('Айтемы не ваши')
    }
  }


  private async getItemsMoney(items_ids) {
    const {rows: [{sum}]} = await db.query(sql`
      WITH items AS (
        SELECT item_data_id FROM game.item
        WHERE id = ANY(${items_ids})
      )
     
      SELECT SUM(price) FROM game.item_data
      WHERE id IN (SELECT item_data_id FROM items)
    `)

    return Number(sum)
  }


  private async takeItemsFromUser(user, items_ids) {
    await db.query(sql`
      DELETE FROM game.item
      WHERE id = ANY(${items_ids}) 
        AND user_id = ${user.id}
    `)
  }


  private async isUserItems(user, items_ids) {
    // db.query(sql`
    //
    // `)
    return true
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

