import {useMutation} from "@apollo/react-hooks"
import gql from "graphql-tag"


export default function useAction(actionName, vars, depends = []) {
  return useMutation(gql`
    mutation ($arg1: Int!) {
      ${actionName}($arg1) {__typename}
    }
  `, {
    variables: vars,
    refetchQueries: depends.map(query => ({query}))
  })
}

