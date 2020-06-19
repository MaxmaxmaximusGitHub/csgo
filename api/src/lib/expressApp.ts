import cookieParser from 'cookie-parser'
import connectRedis from 'connect-redis'
import {getUserById} from "./helpers"
import session from 'express-session'
import bodyParser from 'body-parser'
import passport from "passport"
import express from 'express'
import redis from 'redis'
import {User} from "./types";
import {Express} from 'express'


const redisUrl = `redis://${
  process.env.REDIS_PASS
}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`


const redisClient = redis.createClient(redisUrl)
const RedisStore = connectRedis(session)
const app = express()


app.set('trust proxy', 1) // trust nginx

app.use(bodyParser.json())
app.use(cookieParser())


app.use(session({
  store: new RedisStore({client: redisClient}),
  secret: process.env.API_SESSIONS_SECRET_KEY,
  resave: false,
  name: 'authToken',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365 // год
  }
}))


app.use(passport.initialize())
app.use(passport.session())


passport.serializeUser<User, String>((user, done) => {
  done(null, user.id)
})


passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id)
  done(null, user)
})


app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error)
    return
  }

  console.log(`Auth server started on http://localhost:${process.env.PORT}`)
})


export default app as Express



