import app from "../app"

app.post('/sendMessage', (req, res) => {

  console.log('ACTION sendMessage:')
  console.log(req.headers)
  console.log(req.body)

  res.json({
    text: 'MY TEXT 33',
  })
})

console.log(11)
