'use strict';

import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import RankingsStore from '../stores/RankingsStore';
import Api from '../utils/ApiClient';

const ActionCreator = {

  /**
   *
   *
   */
  getRankings: function () {
    if (RankingsStore.isCached()) {
      RankingsStore.propagateRankings();
    } else {
      Api
        .get('/api/rankings')
        .then(function (rankings) {
          AppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_RANKINGS,
            rankings: rankings
          });
        })
        .catch(function (error) {
          AppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_ERROR,
            error: 'There was a problem getting the rankings'
          });
        });
    }
  }
};

export default ActionCreator;
