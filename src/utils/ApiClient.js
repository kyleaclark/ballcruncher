'use strict';

import request from 'superagent';

/**
 * Wrapper for calling a API
 */
const ApiClient = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      request
        .get(url)
        .end((error, res) => {
          console.log('error res : ', error, res);
          if (res.status === 404) {
            reject();
          } else {
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
};

export default ApiClient
