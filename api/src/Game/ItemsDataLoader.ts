import fetch from 'node-fetch'
import cheerio from 'cheerio'
import url from 'url'
import db from "../lib/db"
import sql from 'sql-tag'
import querystring from 'querystring'


const TWO_FA_SECRET = 'KLNY5BFNIUUO7KK5'
const API_KEY = '80b37828-df8d-4da4-b7aa-3557287b157e'


export default class ItemsDataLoader {


  static async update() {
    const loaderState = await this.getLoaderState()

    if (loaderState.loading) {
      throw new Error('Уже идет обновление айтемов')
    }

    await this.resetLoaderState()
    await this.setLoading(true)

    console.log('ololo')

    await this.setLoading(false)
  }


  static async getLoaderState() {
    const {rows: [loaderState]} = await db.query(sql`
      SELECT *
      FROM game.items_data_loader
    `)

    return loaderState
  }


  static async setLoaderTotal(total) {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET total = ${total}
    `)
  }


  static async setLoading(loading) {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET loading = ${loading}
    `)
  }


  static async setLoaderCompleted(completed) {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET completed = ${completed}
    `)
  }


  static async resetLoaderState() {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET loading   = false,
          completed = 0,
          total     = 0
    `)
  }


}





