import gql from "graphql-tag"


export const START_SIMULATION = gql`
  mutation START_SIMULATION ($options: SimulationOptionsInput!){
    start_simulation(options: $options) {
      id
    }
  }
`
