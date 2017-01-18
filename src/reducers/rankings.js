import * as types from '../constants/actionTypes'
import reducerHandler from '../utils/reducerHandler'

const initialState = {}

function updateRankings(state, action) {
  let nextState = generateRankings(action.rankingsList)
  return Object.assign({}, state, nextState)
}

function generateRankings(rankingsList) {
  let rankings = {}

  rankingsList.forEach((ranking) => {
    let id = ranking._id

    rankings[id] = ranking;
  })

  return rankings
}

const actionHandlers = {
	[types.UPDATE_RANKINGS]: updateRankings
}

export default reducerHandler(initialState, actionHandlers)
