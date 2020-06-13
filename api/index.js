import 'core-js'
import '@csshot/catch-exceptions'

setImmediate(() => {
  require('./lib/auth')
  require('./actions/actions')
})



