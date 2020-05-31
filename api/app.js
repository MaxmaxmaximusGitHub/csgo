import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import hasuraAuthMiddleware from './lib/hasuraAuthMiddleware'

const PORT = process.env.PORT
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
// app.use()


app.listen(PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Api server started on http://localhost:${ PORT }`)
})


export default app

