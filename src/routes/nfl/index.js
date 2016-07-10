/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Nfl from './nfl';
import fetch from '../../core/fetch';

export default {

  path: '/nfl',

  async action() {
    const resp = await fetch('/api/rankings');
    const data = await resp.json();
    if (!data) throw new Error('Failed to load rankings.');
    return <Nfl rankings={data} />;
  },

};
