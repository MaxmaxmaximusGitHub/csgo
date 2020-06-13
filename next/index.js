// server.js
const {createServer} = require('http')
const {parse} = require('url')
const Next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.NEXT_PORT
const debugPort = process.env.NEXT_DEBUG_PORT

const app = Next({dev, port})
const handler = app.getRequestHandler()


console.log('next port', port)
console.log('next debug port', debugPort)


app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handler(req, res, parsedUrl)

  }).listen(3000, (err) => {
    if (err) throw err
    console.log('Next started on http://localhost:3000')
  })
})
