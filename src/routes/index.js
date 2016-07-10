/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/app';

// Child routes
import home from './home';
import nfl from './nfl';
import content from './content';
import error from './error';

export default {

  path: '/',

  children: [
    home,
    nfl,
    content,
    error
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>
        {component}
      </App>
    );
  },

};
