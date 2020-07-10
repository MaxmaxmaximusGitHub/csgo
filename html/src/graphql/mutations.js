import gql from 'graphql-tag'


export const MAKE_BET = gql`
  mutation MAKE_BET {
    game_make_bet {
      id
    }
  }
`


export const UPDATE_ITEMS_DATA = gql`
  mutation UPDATE_SKINS {
    update_items_data {
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


export const BUY_ITEM = gql`
  mutation BUY_ITEM ($skin_id: bigint!) {
    buy_item(item_data_id: $skin_id) {
      id
    }
  }
`


export const SELL_ITEM = gql`
  mutation SELL_ITEM ($id: bigint!) {
    sell_item(item_id: $id) {
      id
    }
  }
`

