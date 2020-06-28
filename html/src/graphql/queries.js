import gql from "graphql-tag"


export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    user_current_view {
      id
      steam_id
      nickname
      avatar
      lang
      role
    }
  }
`

export const GET_ROUNDS_HISTORY = gql`
  query GET_ROUNDS_HISTORY {
    game_round (
      order_by: [{id: desc}],
      limit: 5
    ) {
      id
      status
      created_at
      x
    }
  }
`

export const GET_ACTIVE_BETS = gql`
  query GET_ACTIVE_BETS {
    game_bet_active_view {
      id
      money
      user {
        id
        avatar
        nickname
      }
    }
  }
`

export const GET_ACTIVE_ROUNDS = gql`
  query GET_ACTIVE_ROUNDS {
    game_round_active_view {
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

export const GET_SKINS = gql`
  query GET_SKINS {
    game_skin (order_by: {market_hash_name: asc}) {
      id
      avg_price
      bg_color
      buy_order
      image_url
      market_hash_name
      popularity_7d
      price
      ru_name
      ru_quality
      ru_rarity
      text_color
    }
  }
`

export const GET_SKINS_LOADER_STATE = gql`
  query GET_SKINS_LOADING_STATE {
    game_skin_loader {
      completed
      loading
      total
    }
  }
`
