import * as types from '../constants/actionTypes'
import Api from '../utils/ApiClient';

function receiveRankings(rankings) {
  return {
    type: types.RECEIVE_RANKINGS,
    rankings: rankings
  }
}

export function getRankings() {
  return dispatch => {
    Api
      .get('/api/rankings')
      .then(rankings => {
        dispatch(receiveRankings(rankings));
      });
  }
}
