import * as types from '../constants/actionTypes';

const initialState = []

function receiveRankings(state, action) {
  return action.rankings;
}

const actionHandlers = {
	[types.RECEIVE_RANKINGS]: receiveRankings
}

export default function rankings(state = initialState, handlers = actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = handlers[action.type];

    if (reduceFn) {
      return reduceFn(state, action);
    }

    return state;
  };
}
