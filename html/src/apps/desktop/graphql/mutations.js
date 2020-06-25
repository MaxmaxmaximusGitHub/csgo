import gql from "graphql-tag";

export const DELETE_MESSAGE = gql`
  mutation DELETE_MESSAGE ($id: bigint!) {
    delete_chat_message_by_pk(id: $id) {
      id
    }
  }
`

export const SEND_MESSAGE = gql`
  mutation SEND_MESSAGE ($text: String!){
    send_message(text: $text) {
      id
    }
  }
`
