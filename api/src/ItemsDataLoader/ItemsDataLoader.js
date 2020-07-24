import fetch from 'node-fetch'
import querystring from 'querystring'
import urlJoin from 'url-join'
import db from "../lib/db"
import sql from 'sql-tag'
import {totp} from 'notp'
import base32 from 'thirty-two'


export default class ItemsDataLoader {

  static TWO_FA_SECRET = 'KLNY5BFNIUUO7KK5'
  static API_KEY = '80b37828-df8d-4da4-b7aa-3557287b157e'
  static API_URL = `https://bitskins.com/api/v1/`


  static async update() {
    const loaderState = await this.getLoaderState()

    if (loaderState.loading) {
      throw new Error('Уже идет обновление айтемов')
    }

    await this.resetLoaderState()
    await this.setLoading(true)

    try {
      await this.updateItemsData()
    } catch (error) {
      console.error(error)
    }

    await this.setLoading(false)
  }


  static async stop() {
    await this.setLoading(false)
  }


  static async updateItemsData() {
    var count = 0
    await this.eachItem(async (itemData) => {
      await this.updateItemData(itemData)
      await this.setCompletedCount(++count)
    })
  }


  static async updateItemData(itemData) {
    var {
      image, inspect_link, inspectable, market_hash_name,
      phase, suggested_price,
      pattern_info: {quality, rarity}
    } = itemData

    if (!phase) phase = ''
    var price = Math.ceil(Number(suggested_price) * 100)
    var has_doppler = /Doppler/.test(market_hash_name)

    await db.query(sql`
      INSERT INTO game.item_data
      (image, inspect_link, inspectable, market_hash_name,
       phase, price, quality, rarity) 
       
      VALUES (
      ${image}, ${inspect_link}, ${inspectable}, ${market_hash_name},
      ${phase}, ${price}, ${quality}, ${rarity})
      
      ON CONFLICT (market_hash_name, phase)
        
      DO UPDATE SET 
      (image, inspect_link, inspectable, market_hash_name,
        phase, price, quality, rarity) = (
      ${image}, ${inspect_link}, ${inspectable}, ${market_hash_name},
      ${phase}, ${price}, ${quality}, ${rarity})
    `)
  }


  static async eachItem(callback) {
    var page = 1

    do {
      try {
        var {items} = await this.api('get_inventory_on_sale', {
          page: page,
          per_page: 480,
        })

        if (!items.length) {
          return
        }

        for (let item of items) {
          const loaderState = await this.getLoaderState()
          if (!loaderState.loading) return
          await callback(item)
        }

        page++
      } catch (error) {
        console.error(error)
      }

    } while (true)
  }


  static async api(methodName, options = {}) {
    const methodUrl = this.getMethodUrl(methodName, options)
    const res = await fetch(methodUrl)
    const {status, data} = await res.json()

    if (status === 'fail') {
      throw new Error(data.error_message)
    }

    return data
  }


  static getMethodUrl(methodName, options = {}) {
    options = {
      api_key: this.API_KEY,
      code: this.generate2FACode(),
      ...options
    }

    const query = querystring.stringify(options)
    return urlJoin(this.API_URL, methodName, '?' + query)
  }


  static generate2FACode() {
    return totp.gen(base32.decode(this.TWO_FA_SECRET))
  }


  static async getLoaderState() {
    const {rows: [loaderState]} = await db.query(sql`
      SELECT *
      FROM game.items_data_loader
    `)

    return loaderState
  }


  static async setLoading(loading) {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET loading = ${loading}
    `)
  }


  static async setCompletedCount(completed) {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET completed = ${completed}
    `)
  }


  static async resetLoaderState() {
    await db.query(sql`
      UPDATE game.items_data_loader
      SET loading   = false,
          completed = 0
    `)
  }


  static async clear() {
    await db.query(sql`
      DELETE
      FROM game.item_data
    `)
  }

}





