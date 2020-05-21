import 'core-js'
import './catch-exceptions'

setInterval(() => {}, 1000)

setImmediate(() => {
  require('./server')
})


