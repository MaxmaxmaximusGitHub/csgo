import gql from "graphql-tag"


export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    current_user {
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


export const GET_BOTS = gql`
  query GET_BOTS {
    bot {
      id
      nickname
      avatar
      steam_id
      steam_profile
    }
  }
`
