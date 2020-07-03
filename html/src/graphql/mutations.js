import gql from 'graphql-tag'


export const MAKE_BET = gql`
  mutation MAKE_BET {
    game_make_bet {
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


export const MONEY_PLUS = gql`
  mutation MONEY_PLUS {
    money_plus {
      money
    }
  }
`


export const MONEY_MINUS = gql`
  mutation MONEY_MINUS {
    money_minus {
      money
    }
  }
`


export const BUY_SKIN = gql`
  mutation BUY_SKIN ($skin_id: bigint!) {
    buy_skin(skin_id: $skin_id) {
      id
    }
  }
`
