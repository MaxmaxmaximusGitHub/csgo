import { ApolloServer, PubSub, gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'


const messages = []


export const typeDefs = gql`
  type Message {
    text: String
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    sendMessage(text: String): Boolean
  }
`

export const resolvers = {
  Query: {
    messages: () => messages
  },

  Mutation: {
    sendMessage(q, {text}) {
      messages.push({text})
    }
  },

  Message: {
    text: ({text}) => text
  },
}


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});



