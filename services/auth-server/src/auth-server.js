import express from 'express'
// import { schema } from './schema'
// import { createServer } from 'http'
// import { ApolloServer, gql } from 'apollo-server-express'


const PORT = 4000
const app = express()
let count = 0

app.get('/', (req, res) => {
  console.log('incoming request', count++)
  res.send('OLOLO 233')
})

app.listen(PORT, (error) => {
  if (error) return console.error(error)
  console.log(require('path').sep)
  console.log(require('path').sep)
  console.log(require('path').sep)
  console.log(require('path').sep)
  console.log(`Auth server started on http://localhost:${ PORT }`)
})


// const httpServer = createServer(app)

// noinspection JSCheckFunctionSignatures
// const apolloServer = new ApolloServer({schema})
// apolloServer.applyMiddleware({app, path: '/graphql'})
// apolloServer.installSubscriptionHandlers(httpServer)
//
//
// httpServer.listen({port: PORT}, () => {
//   console.log(`Server started on http://localhost:${ PORT }`);
// });



