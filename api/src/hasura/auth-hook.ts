import app from "../lib/expressApp";
import {User} from "../lib/types";
import {Response} from "express-serve-static-core";


app.get('/auth-hook', async (req, res: Response) => {

  const user = req.user as User

  if (user) {
    res.json({
      "X-Hasura-User-Id": user.id,
      "X-Hasura-Role": user.role,
      "X-Hasura-User": JSON.stringify(user),
    })
  } else {
    res.json({
      "X-Hasura-User-Id": '-1',
      "X-Hasura-Role": 'anonymous',
      "X-Hasura-User": JSON.stringify(null)
    })
  }

})
