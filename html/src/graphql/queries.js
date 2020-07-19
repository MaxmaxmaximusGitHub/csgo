import gql from "graphql-tag"


export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    view_current_user {
      id
      money
      steam_id
      nickname
      avatar
      lang
      role
    }
  }
`


export const GET_ACTIVE_ROUND = gql`
  query GET_ACTIVE_ROUNDS {
    game_view_active_round {
      id
      x
      status
      start_playing_at
      start_pending_at
      start_show_at
    }
  }
`

export const GET_GAME_SETTINGS = gql`
  query GET_GAME_SETTINGS {
    game_settings {
      pending_time
      show_time
      speed_x
    }
  }
`


export const GET_ITEMS_DATA_LOADER = gql`
  query GET_ITEMS_LOADER {
    game_items_data_loader {
      loading
      completed
    }
  }
`


export const GET_ITEMS_DATA = gql`
  query GET_ITEMS_DATA (
    $cursor: Int
  ) {
    game_item_data (
      where: {
        price: {_lt: $cursor}
      }
      order_by: {price: desc, id: asc}
    ) {
      id
      image
      market_hash_name
      inspect_link
      inspectable
      phase
      quality
      rarity
      price
    }
  }
`


export const GET_MY_ITEMS = gql`
  query GET_MY_ITEMS ($cursor: timestamptz) {
    game_view_my_item (
      order_by: {created_at: desc}
    ) {
      id

      item_data{
        image
        inspect_link
        inspectable
        market_hash_name
        phase
        price
        quality
        rarity
      }
    }
  }
`

