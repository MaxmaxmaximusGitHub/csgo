import app from "./expressApp";
import {getUserById} from "./helpers";


class ActionsController {


  constructor() {
    this.actions = new Map()
    app.use('/actions', (req, res) => {
      this.onRequest(req, res)
    })
  }


  async onRequest(req, res) {
    const {action, input: data, session_variables} = req.body
    const userId = session_variables['x-hasura-user-id']
    const user = await getUserById(userId)

    try {
      var result = await this.callAction(action.name, user, data)
      this.sendResult(res, result)

    } catch (error) {
      this.sendError(res, error)
    }
  }


  callAction(name, user, data) {
    const actionHandler = this.actions.get(name)

    if (!actionHandler) {
      throw new Error(`Action "${name}" not exists`)
    }

    return actionHandler(user, data)
  }


  sendResult(res, result) {
    res.json(result)
  }


  sendError(res, error) {
    res.status(403).send({
      message: error.message,
      code: error.code,
    })
  }


  add(name, handler) {
    this.actions.set(name, handler)
  }

}


export default new ActionsController()

