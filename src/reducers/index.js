import { combineReducers } from 'redux'
import rankings from './rankings'
import fantasyFootballRankings from './fantasy-football-rankings'

const rootReducer = combineReducers({
  rankings,
  fantasyFootballRankings
})

export default rootReducer
