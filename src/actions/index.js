import * as types from '../constants/actionTypes';
import fetch from '../core/fetch';

function receiveRankings(rankings) {
  return {
    type: types.RECEIVE_RANKINGS,
    rankings: rankings
  }
}

export function getRankings() {
  return dispatch => {
    fetch('/api/rankings')
      .then(rankings => {
        dispatch(receiveRankings(rankings));
      });
  }
}
