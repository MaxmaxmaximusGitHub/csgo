import app from "./expressApp";
import {User} from "./types";
import {Response} from "express-serve-static-core";
import sql from 'sql-tag'
import db from "./db"
import {getUserById} from "./helpers";


app.get('/auth-hook', async (req, res: Response) => {

  const user = await getUserById(req.user)

  if (user) {
    res.json({
      "X-Hasura-User-Id": user.id,
      "X-Hasura-Role": user.role,
    })
  } else {
    res.json({
      "X-Hasura-User-Id": '-1',
      "X-Hasura-Role": 'anonymous',
    })
  }

})
