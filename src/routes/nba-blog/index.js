/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/layout';
import NbaBlog from './nba-blog';
import fetch from '../../core/fetch';

export default {

  path: '/nba/blog/*',

  async action({ store, path }) {
    const data = await new Promise((resolve) => {
      require.ensure([], require => {
        resolve(require('../../content/temp.md'));
      }, 'temp');
    });

    return {
      title: data.title,
      component: <Layout><NbaBlog {...data} /></Layout>,
    };
  },

};
