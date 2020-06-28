import fetch from 'node-fetch'
import cheerio from 'cheerio'
import url from 'url'
import ITEMS from './items.json'
import db from "../lib/db"
import sql from 'sql-tag'
import ActionsController from "../lib/ActionsController"


ActionsController.add('update_skins', async () => {
  await SkinsLoader.load()
  return {id: 0}
})


class SkinsLoader {

  static steamListingUrl = 'https://steamcommunity.com/market/listings/730/'
  static marketJson = 'https://market.csgo.com/api/v2/prices/USD.json'
  static haveNotLoadedImages = false
  static tryLoadNotLoadedImagesTimeoutId = null
  static TRY_LOAD_NOT_LOADED_IMAGES_INTERVAL = 61000


  static async init() {
    await this.resetLoaderState()

    const {try_images_loading} = await this.getLoaderState()
    if (try_images_loading) {
      this.tryLoadNotLoadedImages()
    }
  }


  static async load() {
    await this.loadSkins()
    await this.tryLoadNotLoadedImages()
  }


  static async loadSkins() {
    const loaderState = await this.getLoaderState()

    if (loaderState.loading) {
      throw new Error('Уже идет обновление скинов')
    }

    await this.resetLoaderState()
    await this.setLoading(true)

    const skins = await this.getMarketSkins()
    await this.setLoaderTotal(skins.length)

    console.log('skins.length', skins.length)

    for (let i = 0; i < skins.length; i++) {
      try {
        await this.saveSkin(skins[i])
        await this.setLoaderCompleted(i + 1)
      } catch (error) {
        console.error(error)
      }
    }

    await this.setLoading(false)
  }


  static async saveSkin(item) {
    const {
      avg_price, bg_color, buy_order, market_hash_name,
      popularity_7d, price, ru_name, ru_quality, ru_rarity,
      text_color
    } = item

    await db.query(sql`
      INSERT INTO game.skin
      (avg_price, bg_color, buy_order, market_hash_name,
       popularity_7d, price, ru_name, ru_quality, ru_rarity,
       text_color)
      VALUES 
       (${avg_price}, ${bg_color}, ${buy_order}, ${market_hash_name},
        ${popularity_7d}, ${price}, ${ru_name}, ${ru_quality}, ${ru_rarity},
        ${text_color})
        
      ON CONFLICT (market_hash_name)
        
      DO UPDATE set (avg_price, bg_color, buy_order, market_hash_name,
       popularity_7d, price, ru_name, ru_quality, ru_rarity,
       text_color) =
        
      (${avg_price}, ${bg_color}, ${buy_order}, ${market_hash_name},
      ${popularity_7d}, ${price}, ${ru_name}, ${ru_quality}, ${ru_rarity},
      ${text_color})
    `)
  }


  static async setTryImagesLoading(try_images_loading) {
    await db.query(sql`
      UPDATE game.skin_loader
      SET try_images_loading = ${try_images_loading}
    `)
  }


  static async tryLoadNotLoadedImages() {
    console.log('tryLoadNotLoadedImages')
    await this.setTryImagesLoading(true)

    this.haveNotLoadedImages = false

    const {rows} = await db.query(sql`
      SELECT id, market_hash_name
      FROM game.skin
      WHERE image_url IS NULL
    `)

    for (let i = 0; i < rows.length; i++) {
      const {id, market_hash_name} = rows[i]
      const image_url = await this.getImageUrl(market_hash_name)

      if (!image_url) {
        this.setNotAllImageLoaded()
        return
      }

      console.log('image loaded', image_url)

      await db.query(sql`
        UPDATE game.skin
        SET image_url = ${image_url}
        WHERE id = ${id}
      `)
    }

    console.log('not loaded images rows', rows)
    console.log('set try loading to false')
    await this.setTryImagesLoading(false)
  }


  static async getImageUrl(market_hash_name) {
    const marketHashNameEscaped = encodeURIComponent(market_hash_name)
    const skinPageUrl = url.resolve(this.steamListingUrl, marketHashNameEscaped)

    const res = await fetch(skinPageUrl)
    const body = await res.text()

    const $ = cheerio.load(body)
    const imageUrl = $('.market_listing_largeimage > img').attr('src')

    return imageUrl
  }


  static async time(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }


  static random(min = 0, max = 1) {
    return Math.round(min + (Math.random() * (max - min)))
  }


  static setNotAllImageLoaded() {
    clearTimeout(this.tryLoadNotLoadedImagesTimeoutId)
    this.haveNotLoadedImages = true

    this.tryLoadNotLoadedImagesTimeoutId = setTimeout(() => {
      this.tryLoadNotLoadedImages()
    }, this.TRY_LOAD_NOT_LOADED_IMAGES_INTERVAL)
  }


  static async getMarketSkins() {
    // const res = await fetch(this.marketJson)
    // const json = await res.json()

    const json = ITEMS as any
    const {success, items} = json

    if (!success) {
      console.error(json)
      throw new Error('Cant load items')
    }

    return Object.keys(items).map(key => items[key])
  }


  static async getLoaderState() {
    const {rows} = await db.query(sql`
      SELECT *
      FROM game.skin_loader
    `)
    return rows[0]
  }


  static async setLoaderTotal(total) {
    await db.query(sql`
      UPDATE game.skin_loader
      SET total = ${total}
    `)
  }


  static async setLoading(loading) {
    await db.query(sql`
      UPDATE game.skin_loader
      SET loading = ${loading}
    `)
  }


  static async setLoaderCompleted(completed) {
    await db.query(sql`
      UPDATE game.skin_loader
      SET completed = ${completed}
    `)
  }


  static async resetLoaderState() {
    await db.query(sql`
      UPDATE game.skin_loader
      SET loading   = false,
          completed = 0,
          total     = 0
    `)
  }


}


SkinsLoader.init()



