import * as types from '../constants/actionTypes';
import fetch from '../core/fetch';

function receiveRankings(rankings) {
  return {
    type: types.RECEIVE_RANKINGS,
    rankings: rankings
  }
}

export function getRankings(nflYear) {
  let year = nflYear || 2015;
  let url = `/api/rankings?year=${year}`;

  return async dispatch => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      dispatch(receiveRankings(data))
    } catch (error) {
      console.log('getRankings error : ', error)
    }
  }
}
