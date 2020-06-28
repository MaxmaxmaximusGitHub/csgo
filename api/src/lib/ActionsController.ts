import app from "./expressApp";


class ActionsController {

  private actions: Map<String, Function>;


  constructor() {
    this.actions = new Map()
    app.use('/actions', (req, res) => {
      this.onRequest(req, res)
    })
  }


  async onRequest(req, res) {
    const {action, input: data, session_variables} = req.body
    const user = JSON.parse(session_variables['x-hasura-user'])

    try {
      var result = await this.callAction(action.name, user, data)
      this.sendResult(result, res)
    } catch (error) {
      this.sendError(error, res)
    }
  }


  callAction(name, user, data) {
    const actionHandler = this.actions.get(name)

    if (!actionHandler) {
      throw new Error(`Action "${name}" not exists`)
    }

    return actionHandler(user, data)
  }


  sendResult(result, res) {
    res.json(result)
  }


  sendError(error, res) {
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

