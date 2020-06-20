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
    const {action, input, session_variables} = req.body
    const actionHandler = this.actions.get(action.name)
    const user = JSON.parse(session_variables['x-hasura-user'])

    try {
      var result = await actionHandler(input, user)
      this.sendResult(result, res)
    } catch (error) {
      this.sendError(error, res)
    }
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

