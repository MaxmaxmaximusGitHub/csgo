import passport from "passport";
import SteamStrategy from "passport-steam";
import {createUser, getUserBySteamId} from "../lib/helpers";
import app from "../lib/expressApp";
import db from "../lib/db";
import sql from "sql-tag";


const OWNER_ROLES_STEAM_IDS = ['76561198823843713']

const ROLES = {
  owner: 'owner',
  user: 'user',
  anonymous: 'anonymous',
}


app.get('/hook/hasurahook', async function (req, res) {

  if (!req.user) {
    res.json({
      "X-Hasura-User-Id": '-1',
      "X-Hasura-Role": 'anonymous',
      "X-Hasura-User": JSON.stringify(null)
    })

  } else {
    res.json({
      "X-Hasura-User-Id": req.user.id,
      "X-Hasura-Role": req.user.role,
      "X-Hasura-User": JSON.stringify(req.user),
    })
  }

})


passport.use(new SteamStrategy({
    returnURL: `${process.env.API_STEAM_REALM}/auth/steam/return`,
    realm: process.env.API_STEAM_REALM,
    apiKey: process.env.API_STEAM_API_KEY
  },

  async (identifier, profile, done) => {
    const json = profile._json
    const steam_id = json['steamid']

    var user = await getUserBySteamId(steam_id)

    var role = OWNER_ROLES_STEAM_IDS.includes(steam_id)
      ? ROLES.owner : ROLES.user

    if (!user) {
      user = await createUser({
        steam_id: steam_id,
        avatar: json['avatarfull'],
        nickname: json['personaname'],
        steam_profile: json['profileurl'],
        lang: json['loccountrycode'].toLowerCase(),
        role: role
      })
    }

    done(null, user)
  }
))


app.get('/auth/*', (req, res, next) => {
  if (req.headers.referer) {
    req.session.returnTo = req.headers.referer
  }
  next(null)
})


app.get('/auth/steam', passport.authenticate('steam'))


app.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect(req.session.returnTo)
})


app.get('/auth/steam/return',
  passport.authenticate('steam', {failureRedirect: '/'}),
  (req, res) => res.redirect(req.session.returnTo)
)



