import ActionsController from "../lib/ActionsController";
import Game from "./Game";


ActionsController.add('game_make_bet', async (user, data) => {
  return Game.makeBet(user)
})


