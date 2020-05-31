import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'


const PORT = process.env.PORT
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())


app.get('/hasurahook', (req, res) => {

  res.json({
    "X-Hasura-User-Id": "5",
    "X-Hasura-Role": "admin",
    "X-Hasura-Is-Owner": "true",
    "X-Hasura-Custom": "custom value"
  })

  // res.status(401).end()
})

app.listen(PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Auth server started on http://localhost:${ PORT }`)
})




