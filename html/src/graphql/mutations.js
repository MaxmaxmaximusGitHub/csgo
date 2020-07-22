import gql from 'graphql-tag'


export const MAKE_BET = gql`
  mutation MAKE_BET ($items_ids: [bigint!]!) {
    game_make_bet (items_ids: $items_ids) {
      done
    }
  }
`

export const UPDATE_ITEMS_DATA = gql`
  mutation UPDATE_ITEMS_DATA {
    update_items_data {
      done
    }
  }
`

export const STOP_UPDATE_ITEMS_DATA = gql`
  mutation STOP_UPDATE_ITEMS_DATA {
    stop_update_items_data {
      done
    }
  }
`

export const CLEAR_ITEMS_DATA = gql`
  mutation CLEAR_ITEMS_DATA {
    clear_items_data {
      done
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
  mutation BUY_ITEM ($item_data_id: bigint!) {
    buy_item(item_data_id: $item_data_id) {
      id
    }
  }
`

export const SELL_ITEM = gql`
  mutation SELL_ITEM ($item_id: bigint!) {
    sell_item(item_id: $item_id) {
      done
    }
  }
`
export const GET_TWO_FA = gql`
  mutation GET_TWO_FA  {
    get_two_fa {
      done
    }
  }
`
