import express from 'express'
import cookieParser from 'cookie-parser'
// import { schema } from './schema'
// import { createServer } from 'http'
// import { ApolloServer, gql } from 'apollo-server-express'


const PORT = 4000
const app = express()
app.use(cookieParser())


app.get('/', (req, res) => {
  console.log('incoming request', req.headers)

  var cookie = req.cookies.cookieName;
  if (!cookie) {
    // no: set a new cookie
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('cookieName', randomNumber, {maxAge: 900000});
    console.log('cookie added');
  } else {
    // yes, cookie was already present
    console.log('cookie exists', cookie);
  }

  res.send('OLOLO 233')
})

app.listen(PORT, (error) => {
  if (error) return console.error(error)
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



