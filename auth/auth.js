import express from 'express'
import passport from 'passport'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import SteamStrategy from 'passport-steam'
import createUser from "./createUser"
import session from 'express-session'
import connectRedis from 'connect-redis'
import redis from 'redis'


const redisUrl = `redis://${ process.env.REDIS_PASS }@redis:6379`
const redisClient = redis.createClient(redisUrl)
const RedisStore = connectRedis(session)
const PORT = process.env.PORT
const app = express()


app.use(cookieParser())


app.use(session({
  store: new RedisStore({client: redisClient}),
  secret: process.env.AUTH_SESSIONS_SECRET_KEY
}))


app.use(passport.initialize())
app.use(passport.session())

app.get('/hook/hasurahook', (req, res) => {

  console.log('hasura hook user', req.user)

  res.json({
    "X-Hasura-User-Id": "2",
    "X-Hasura-Role": "admin",
    "X-Hasura-Is-Owner": "true",
    "X-Hasura-Custom": "custom value"
  })
  // res.status(401).end()
})


////////////////////////////////////////////////
// auth
////////////////////////////////////////////////
passport.use(new SteamStrategy({
    returnURL: 'http://localhost/auth/steam/return',
    realm: 'http://localhost/',
    apiKey: process.env.AUTH_STEAM_API_KEY
  },
  function (identifier, profile, done) {
    console.log('DATA FROM STEAM', identifier, profile, done)

    done(null, {fakeUser: "ololo"})

    // User.findByOpenID({ openId: identifier }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

passport.serializeUser(function (user, done) {
  // console.log('serializeUser', user)
  done(null, user)
});

passport.deserializeUser(function (obj, done) {
  // console.log('deserializeUser', obj)
  done(null, obj)
});


app.get('/auth/steam', passport.authenticate('steam'))


app.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/')
  console.log('logout')
})


app.get(
  '/auth/steam/return',
  passport.authenticate('steam', {failureRedirect: '/login'}),
  (req, res) => res.redirect('/')
)


app.listen(PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Auth server started on http://localhost:${ PORT }`)
})




