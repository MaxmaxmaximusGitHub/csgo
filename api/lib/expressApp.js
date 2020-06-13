import cookieParser from 'cookie-parser'
import connectRedis from 'connect-redis'
import {getUserById} from "./helpers"
import session from 'express-session'
import bodyParser from 'body-parser'
import passport from "passport"
import express from 'express'
import redis from 'redis'


const redisUrl = `redis://${
  process.env.REDIS_PASS
}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`


const redisClient = redis.createClient(redisUrl)
const RedisStore = connectRedis(session)
const app = express()


app.use(bodyParser.json())
app.use(cookieParser())

app.use(session({
  store: new RedisStore({client: redisClient}),
  secret: process.env.API_SESSIONS_SECRET_KEY,
  resave: false,
}))


app.use(passport.initialize())
app.use(passport.session())


passport.serializeUser((user, done) => {
  done(null, user.id)
})


passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id)
  done(null, user)
})


app.listen(process.env.PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Auth server started on http://localhost:${process.env.PORT}`)
})


export default app

