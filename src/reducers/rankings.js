import * as types from '../constants/actionTypes'
import reducerHandler from '../utils/reducerHandler'

const initialState = {}

function updateRankings(state, action) {
  let rankings = generateRankings(action.rankingsList)
  let yearsList = generateYearsList(rankings)
  let sortedRankings = sortRankings(rankings, yearsList)
  let nextState = {
    values: sortedRankings,
    yearsList
  }

  return Object.assign({}, state, nextState)
}

function generateRankings(rankingsList) {
  let rankings = {}

  rankingsList.forEach((ranking) => {
    let year = ranking.year

    if (!rankings[year]) {
      rankings[year] = []
    }

    rankings[year].push(ranking)
  })

  return rankings
}

function generateYearsList(rankings) {
  let yearsList = []

  for (let key in rankings) {
    yearsList.push(key)
  }

  return yearsList.sort().reverse()
}

function sortRankings(rankings, yearsList) {
  let sortedRankings = {}

  yearsList.forEach((rankingYear) => {
    sortedRankings[rankingYear] = sortRankingsByWeek(rankings[rankingYear])
  })

  return sortedRankings
}

function sortRankingsByWeek(rankingsList) {
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
