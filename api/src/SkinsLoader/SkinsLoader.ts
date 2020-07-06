import fetch from 'node-fetch'
import cheerio from 'cheerio'
import url from 'url'
import db from "../lib/db"
import sql from 'sql-tag'
import ActionsController from "../lib/ActionsController"


ActionsController.add('update_skins', () => {
  SkinsLoader.load()
  return {id: 1}
})


class SkinsLoader {

  static steamListingUrl = 'https://steamcommunity.com/market/listings/730/'
  static marketJson = 'https://market.csgo.com/api/v2/prices/class_instance/USD.json'
  static haveNotLoadedImages = false
  static tryLoadNotLoadedImagesTimeoutId = null
  static loadingImages = false
  static TRY_LOAD_NOT_LOADED_IMAGES_INTERVAL = 5000


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

    for (let i = 0; i < skins.length; i++) {
      try {
        const skin = skins[i]
        await this.saveSkin(skin)
        await this.setLoaderCompleted(i + 1)
      } catch (error) {
        console.error(error)
      }
    }

    try {
      await this.markNotActiveSkins(skins)
    } catch (error) {
      console.error(error)
    }

    await this.setLoading(false)
  }


  static async markNotActiveSkins(skinsInMarket) {
    const {rows: skins} = await db.query(sql`
      SELECT id
      FROM game.skin
    `)

    for (let skin of skins) {
      const hasInMarket = skinsInMarket.some(skinInMarket => {
        return skin.id === skinInMarket.id
      })

      if (!hasInMarket) {
        await db.query(sql`
          UPDATE game.skin
          SET active = false
        `)
      }
    }
  }


  static async saveSkin(skin) {
    let {market_hash_name, max_ask, min_bid, price, volume} = skin

    await db.query(sql`
      INSERT INTO game.skin
      (market_hash_name, max_ask, min_bid, price, volume, active)
      VALUES 
       (${market_hash_name}, ${max_ask}, ${min_bid}, ${price}, ${volume}, true)
       
      ON CONFLICT (market_hash_name)
      DO UPDATE set  (market_hash_name, max_ask, min_bid, price, volume, active) =
      (${market_hash_name}, ${max_ask}, ${min_bid}, ${price}, ${volume}, true)
    `)
  }


  static getMaxBuyOrder(itemOrders) {
    let maxByOrder = 0
    for (let {buy_order} of itemOrders) {
      if (buy_order > maxByOrder) {
        maxByOrder = buy_order
      }
    }
    return Math.ceil(maxByOrder * 100)
  }


  static getMinPrice(itemOrders) {
    let minPrice = Infinity
    for (let {price} of itemOrders) {
      price = Number(price)
      if (price < minPrice) {
        minPrice = price
      }
    }
    return Math.ceil(minPrice * 100)
  }


  static async setTryImagesLoading(try_images_loading) {
    await db.query(sql`
      UPDATE game.skin_loader
      SET try_images_loading = ${try_images_loading}
    `)
  }


  static async updateLoadedImagesCount() {
    await db.query(sql`
      UPDATE game.skin_loader

      SET completed_images = (
        SELECT count(*)
        FROM game.skin
        WHERE image_url IS NOT NULL
      ),

          total_images     = (
            SELECT count(*)
            FROM game.skin
          )

    `)
  }


  static async tryLoadNotLoadedImages() {
    if (this.loadingImages) {
      return
    }

    this.loadingImages = true
    this.haveNotLoadedImages = false

    await this.setTryImagesLoading(true)

    const {rows: skinsWithoutImages} = await db.query(sql`
      SELECT id, market_hash_name
      FROM game.skin
      WHERE image_url IS NULL
      ORDER BY price DESC
    `)

    await this.updateLoadedImagesCount()

    for (let i = 0; i < skinsWithoutImages.length; i++) {

      try {
        const success = await this.loadImageForSkin(skinsWithoutImages[i])
        if (!success) {
          this.setNotAllImageLoaded()
          this.loadingImages = false
          return
        }
        await this.updateLoadedImagesCount()
      } catch (error) {
        console.error(error)
      }

    }

    await this.setTryImagesLoading(false)
    this.loadingImages = false
  }


  static async loadImageForSkin({id, market_hash_name}) {
    await this.time(5000)
    const image_url = await this.getImageUrl(market_hash_name)

    if (!image_url) {
      return false
    }

    console.log('load image', image_url)

    await db.query(sql`
      UPDATE game.skin
      SET image_url = ${image_url}
      WHERE id = ${id}
    `)

    return true
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


  static async getMarketJSON() {
    // const json = await res.json()
    // const res = await fetch(this.marketJson)
    const json = require('./USD.json')
    return json
  }


  static async getMarketSkins() {
    const json = await this.getMarketJSON()

    const itemsArr = Object.keys(json.items).map(key => json.items[key])
    const formatedItems = {}

    itemsArr.forEach(item => {
      if (!formatedItems[item.market_hash_name]) {
        formatedItems[item.market_hash_name] = []
      }
      const itemsByHashName = formatedItems[item.market_hash_name]
      itemsByHashName.push(item)
    })

    let items = Object.keys(formatedItems).map(market_hash_name => {
      const itemOrders = formatedItems[market_hash_name]
      return this.processItem(market_hash_name, itemOrders)
    })

    items = this.filterLowPriceItems(items, 25)

    return items
  }


  static filterLowPriceItems(items, minPrice) {
    return items.filter(({price}) => price >= minPrice)
  }


  static processItem(market_hash_name, itemOrders) {
    const max_ask = this.getMaxBuyOrder(itemOrders)
    const min_bid = this.getMinPrice(itemOrders)
    const volume = itemOrders.length
    const price = Math.ceil(max_ask * 1.55)

    return {
      market_hash_name,
      max_ask,
      min_bid,
      price,
      volume,
    }
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



