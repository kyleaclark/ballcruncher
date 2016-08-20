import * as types from '../constants/actionTypes';
import fetch from '../core/fetch';

function updateRankings(rankings, year) {
  return {
    type: types.UPDATE_RANKINGS,
    rankingsList: rankings,
    year: year
  }
}

export function getRankings(nflYear) {
  let year = nflYear || 2015;
  let url = `/api/rankings?year=${year}`;

  return async (dispatch, getState) => {
    const state = getState()
    const rankings = state.rankings || {}
    const rankingsList = rankings[year]

    if (rankingsList && rankingsList.length) {
      Promise.resolve()
    }

    try {
      const resp = await fetch(url)
      const data = await resp.json()
      dispatch(updateRankings(data, year))
    } catch (error) {
      console.log('getRankings error : ', error)
    }
  }
}
