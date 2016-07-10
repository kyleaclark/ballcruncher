/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './nfl.css';
import Link from '../../components/link';
import NflPowerRankings from '../../components/views/nfl_power_rankings';

const title = 'Ballcruncher - NFL';

function Nfl({ rankings }, context) {
  context.setTitle(title);
  return (
    <div className={s.page}>
      <div className={s.page__container}>

          <h1 className={s.page__title}>NFL Power Rankings</h1>

          <NflPowerRankings rankings={rankings} fullRankings={true} />

      </div>
    </div>
  );
}

Nfl.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Nfl);
