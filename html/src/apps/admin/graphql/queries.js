import gql from "graphql-tag";


export const GET_SIMULATION_BANK = gql`
  query GET_SIMULATION_BANK {
    simulation_bank {
      money
    }
  }
`

