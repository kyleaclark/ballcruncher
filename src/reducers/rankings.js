import * as types from '../constants/actionTypes'
import reducerHandler from '../utils/reducerHandler'

const initialState = null

function updateRankings(state, action) {
  let nextState = {
    [action.year]: sortRankings(action.rankingsList)
  }
  return Object.assign({}, state, nextState)
}

function sortRankings(rankingsList) {
  let list = rankingsList.slice()

  // TODO: refactor sort method to be generic...
  list.sort(function (a, b) {
    if (a.week > b.week) {
      return 1
    }
    if (a.week < b.week) {
      return -1
    }
    return 0
  })

  return list
}

const actionHandlers = {
	[types.UPDATE_RANKINGS]: updateRankings
}

export default reducerHandler(initialState, actionHandlers)
