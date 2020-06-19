import app from "./expressApp";


app.use('/actions', (req, res) => {
  Actions.onRequest(req, res)
})


export default class Actions {

  static actions = new Map()


  static async onRequest(req, res) {
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


  static sendResult(result, res) {
    res.json(result)
  }


  static sendError(error, res) {
    res.status(403).send({
      message: error.message,
      code: error.code,
    })
  }


  static add(name, handler) {
    this.actions.set(name, handler)
  }

}





