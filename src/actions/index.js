import * as types from '../constants/actionTypes';
import fetch from '../core/fetch';

function updateRankings(rankings) {
  return {
    type: types.UPDATE_RANKINGS,
    rankingsList: rankings
  }
}

export function getRankings() {
  let url = '/api/rankings'

  return async (dispatch, getState) => {
    const state = getState()
    const rankings = state.rankings || {}
    const emptyRankings = Object.keys(rankings).length === 0

    if (!emptyRankings) {
      Promise.resolve()
    }

    try {
      const resp = await fetch(url)
      const data = await resp.json()
      dispatch(updateRankings(data))
    } catch (error) {
      console.log('getRankings error : ', error)
    }
  }
}
