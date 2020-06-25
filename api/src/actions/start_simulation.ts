import ActionsController from '../lib/actionsController'


ActionsController.add('start_simulation', async ({options}, user) => {

  console.log('lol', options, user)

  return {
    id: 222
  }

})
