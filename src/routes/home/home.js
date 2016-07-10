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
import s from './home.css';
import Link from '../../components/link';
import BlogEntries from '../../components/views/blog_entries';
import NflPowerRankings from '../../components/views/nfl_power_rankings';
import ballcruncherImage from '../../images/ballcruncher-small.jpg';

const title = 'Ballcruncher - Home';

function Home({ rankings }, context) {
  context.setTitle(title);
  return (
    <div className={s.page}>
      <div className={s.page__container}>
        <div>
          <div className={s.page__primary}>
            <h1 className={s.page__title}>Welcome to Ballcruncher</h1>

            <hr />

            <h4 className={s.homepage__data_title}>NFL Power Rankings</h4>
            <h6 className={s.homepage__data_subtitle}><a href="/nfl" onClick={Link.handleClick}>View the full rankings</a></h6>
            <NflPowerRankings rankings={rankings} />
          </div>

          <div className={s.page__sidebar}>
            <h4 className={s.page__sidebar_title}>Latest Blog Entries:</h4>
            <img src={ballcruncherImage} alt="Ballcruncher" />
            <br /><br />

            <BlogEntries />
          </div>

          <div className={s.clear}></div>
        </div>
      </div>
    </div>
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
