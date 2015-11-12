/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './home.css';
import withStyles from '../../../decorators/withStyles';
import Link from '../../Link';

import BlogEntries from '../../views/blog_entries';
import NflPowerRankings from '../../views/nfl_power_rankings';

let ballcruncherImage = require('../../../images/ballcruncher-small.jpg');

@withStyles(styles)
class HomePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Ballcruncher - Home';
    this.context.onSetTitle(title);
    return (
      <div className="page">
        <div className="page__container">

          <div className="page__primary">
            <h1 className="page__title">Welcome to Ballcruncher</h1>
            <p className="page__subtitle">
              Ballcruncher is &mdash; a critical or vital point; a crucial or difficult question;<br />
            a system analyzing large amounts of information &amp; data about sports.
            </p>

            <hr />


            <h4 className="homepage__data-title">NFL Power Rankings</h4>
            <h6 className="homepage__data-subtitle"><a href="/nfl" onClick={Link.handleClick}>View the full rankings</a></h6>
            <NflPowerRankings />
          </div>


          <div className='page__sidebar'>
            <h4>Latest Blog Entries:</h4>
            <img src={ballcruncherImage} alt="Ballcruncher" />
            <br /><br />

            <BlogEntries />
          </div>

          <div className='clear'></div>

        </div>
      </div>
    );
  }

}

export default HomePage;
