import gql from 'graphql-tag'


export const MAKE_BET = gql`
  mutation MAKE_BET {
    game_make_bet {
      id
    }
  }
`

export const REMOVE_SKIN = gql`
  mutation REMOVE_SKIN ($id: bigint!) {
    delete_game_skin_by_pk(id: $id) {
      id
    }
  }
`

export const UPDATE_SKINS = gql`
  mutation UPDATE_SKINS {
    update_skins {
      id
    }
  }
`

