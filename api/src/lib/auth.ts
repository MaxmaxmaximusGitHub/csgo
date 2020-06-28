import {createUser, getUserBySteamId} from "./helpers";
import SteamStrategy from "passport-steam";
import app from "./expressApp";
import passport from "passport";


const OWNER_ROLES_STEAM_IDS = [
  '76561198823843713'
]


const ROLES = {
  owner: 'owner',
  user: 'user',
  anonymous: 'anonymous',
}


// @ts-ignore
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



