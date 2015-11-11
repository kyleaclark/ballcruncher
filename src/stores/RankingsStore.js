import FluxStore from './Store';
import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

let _rankings = [];

function setRankings(rankings) {
  _rankings = rankings;
}

class RankingsStore extends FluxStore {

  constructor() {
    super();
  }

  getRankings() {
    return _rankings;
  }

}

let rankingsStoreInstance = new RankingsStore();

rankingsStoreInstance.dispatchToken = AppDispatcher.register(payload => {

  const action = payload.action;

  switch (action.type) {
    case ActionTypes.RECEIVE_RANKINGS:

      setRankings(action.rankings);
      break;

    default:
      return true;
  }

  rankingsStoreInstance.emitChange();

});

export default rankingsStoreInstance;
