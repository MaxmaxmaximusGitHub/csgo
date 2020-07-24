import sql from 'sql-tag'
import db from '../lib/db'
import PromisifyPromise from './PromisifyPromise'


export default class Round {

  status = ''
  id = null
  x = 1

  async play() {
    await this.loadSettings()
    await this.createRoundInDb()
    await this.pendingBets()

    await this.playRound()

    await this.showResult()
    await this.markRoundAsDone()
  }


  async loadSettings() {
    const {rows} = await db.query(sql`
      SELECT *
      FROM game.settings
    `)

    this.settings = rows[0]
  }


  async createRoundInDb() {
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
    this.playingRoundPromise = new PromisifyPromise()

    await this.checkAlgorithm()

    return this.playingRoundPromise
  }


  stopRoundAfter(time) {
    this.stopResolveTimer()
    this.timerId = setTimeout(() => {
      this.playingRoundPromise.resolve()
    }, time)
  }


  stopResolveTimer() {
    clearTimeout(this.timerId)
  }


  async checkAlgorithm() {
    this.x = await this.generateX()
    const time = this.generateEndTimeByX(this.x)
    this.stopRoundAfter(time)
    // playingRoundPromise
  }


  generateEndTimeByX(x) {
    return Math.round((x - 100) / 100 * 1000)
  }


  async generateX() {
    // return Math.round((1 + (Math.random() * 5)) * 100)
    return Math.round((1 + (Math.random() * 20)) * 100)
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


  async markRoundAsDone() {
    await this.setStatus('done')
  }


  async makeBet(user, items_ids = []) {
    await this.validateBetParams(user, items_ids)

    const money = await this.getItemsMoney(items_ids)
    await this.takeItemsFromUser(user, items_ids)

    const {rows: [{id}]} = await db.query(sql`
      INSERT INTO game.bet
        (round_id, user_id, money)
      VALUES (${this.id}, ${user.id}, ${money})
      RETURNING id 
    `)

    return {id}
  }


  async validateBetParams(user, items_ids) {
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


  async getItemsMoney(items_ids) {
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


  async takeItemsFromUser(user, items_ids) {
    await db.query(sql`
      DELETE FROM game.item
      WHERE id = ANY(${items_ids}) 
        AND user_id = ${user.id}
    `)
  }


  async isUserItems(user, items_ids) {
    // db.query(sql`
    //
    // `)
    return true
  }


  async userHasBetToThisRound(user) {
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


  async setStatus(status) {

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

