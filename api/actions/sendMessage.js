import app from "../app"
import fetch from "node-fetch"

const HASURA_OPERATION = `
  mutation sendMessage ($text: String) {
    insert_message_one(object: {
      text: $text
    }){ id }
  }
`

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
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};


app.post('/sendMessage', async (req, res) => {
  const {text} = req.body.input;

  // run some business logic

  const {data, errors} = await execute({text});

  if (errors) {
    return res.status(400).json(errors[0])
  }

  return res.json({
    ...data['insert_message_one']
  })
})

