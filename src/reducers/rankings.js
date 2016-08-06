import * as types from '../constants/actionTypes'
import reducerHandler from '../utils/reducerHandler'

const initialState = []

function receiveRankings(state, action) {
  return action.rankings
}

const actionHandlers = {
	[types.RECEIVE_RANKINGS]: receiveRankings
}

export default reducerHandler(initialState, actionHandlers)
