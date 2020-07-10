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
      total
      completed
      total_images
      completed_images
      try_images_loading
    }
  }
`


export const GET_ITEMS_DATA = gql`
  query GET_ITEMS_DATA (
    $cursor: Int
    $search: String
  ) {
    game_item_data (
      where: {
        price: {_lt: $cursor}
        market_hash_name: {_ilike: $search}
        active: {_eq: true}
      }
      order_by: {price: desc, id: asc}
    ) {
      id
      image_url
      market_hash_name
      price
    }
  }
`

export const GET_MY_ITEMS = gql`
  query GET_MY_ITEMS (
    $cursor: timestamptz
    $search: String
  ) {
    game_view_my_item (
      where: {
        item_data: {market_hash_name: {_ilike: $search}}
        created_at: {_lt: $cursor}
      }
      order_by: {created_at: desc}
    ) {
      id
      created_at
      item_data {
        image_url
        market_hash_name
        price
      }
    }
  }
`


