import gql from "@csshot/gql"

const fetch = require("node-fetch")

const HASURA_OPERATION = gql`
  mutation createUser($steam_id: String, $nickname: String, $avatar: String) {
    insert_user_one(object: {steam_id: $steam_id, nickname: $nickname, avatar: $avatar}) {
      id
    }
  }`;


const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://hasura:8080/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );

  return await fetchResponse.json()
};


// Request Handler
export default async function createUser({steam_id, nickname, avatar}) {

  const {data, errors} = await execute({steam_id, nickname, avatar});

  if (errors) {
    // return res.status(400).json(errors[0])
  }

  // success
  return data
}

