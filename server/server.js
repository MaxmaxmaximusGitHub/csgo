import next from 'next'
import express from 'express'
import { schema } from './schema'
import { createServer } from 'http'
import { ApolloServer, gql } from 'apollo-server-express'


console.log(12)
const PORT = 4000
const app = express()
const httpServer = createServer(app)


// noinspection JSCheckFunctionSignatures
const apolloServer = new ApolloServer({schema})
apolloServer.applyMiddleware({app, path: '/graphql'})
apolloServer.installSubscriptionHandlers(httpServer)


httpServer.listen({port: PORT}, () => {
  console.log(`Server started on http://localhost:${ PORT }`);
});



