'use strict';

import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
//import Store from '../stores/Store';
import Api from '../utils/ApiClient';

const ActionCreator = {

  /**
   *
   *
   */
  getRankings: function () {
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
};

export default ActionCreator;
