import FluxStore from './Store';
import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

let _rankings = [];
let _cached = false;

function setRankings(rankings) {
  _rankings = rankings;
}

function cache() {
  _cached = true;
}

class RankingsStore extends FluxStore {

  constructor() {
    super();
  }

  getRankings() {
    return _rankings;
  }

  isCached() {
    return _cached;
  }

  propagateRankings() {
    console.log('propagateRankings');
    this.emitChange();
  }

}

let rankingsStoreInstance = new RankingsStore();

rankingsStoreInstance.dispatchToken = AppDispatcher.register(payload => {

  const action = payload.action;

  switch (action.type) {
    case ActionTypes.RECEIVE_RANKINGS:

      setRankings(action.rankings);
      cache(true);
      break;

    default:
      return true;
  }

  rankingsStoreInstance.propagateRankings();

});

export default rankingsStoreInstance;
