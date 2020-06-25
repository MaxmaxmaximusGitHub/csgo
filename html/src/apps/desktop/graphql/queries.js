import gql from "graphql-tag"


export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    user_current {
      id
      steam_id
      nickname
      avatar
      lang
      role
    }
  }
`

export const GET_CHAT_MESSAGES = gql`
  query GET_CHAT_MESSAGES {
    chat_message {
      id
      text
    }
  }
`

export const GET_GAME_ROUNDS = gql`
  query GET_GAME_ROUNDS {
    game_round (order_by: [{id: desc}]) {
      id
      status
      created_at
      x
    }
  }
`

