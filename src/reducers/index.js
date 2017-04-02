import { combineReducers } from 'redux';
import rankings from './rankings';
import fantasyFootballRankings from './fantasy-football-rankings';

export default combineReducers({
  rankings,
  fantasyFootballRankings,
});
