/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './nfl.css';
import withStyles from '../../../decorators/withStyles';

import NflPowerRankings from '../../views/nfl_power_rankings';

@withStyles(styles)
class NflPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const title = 'Ballcruncher - NFL';

    this.context.onSetTitle(title);

    return (
      <div className="page">
        <div className="page__container">
          <h1 className="page__title">NFL Power Rankings</h1>

          <NflPowerRankings fullRankings={true} />

        </div>
      </div>
    );
  }

}

export default NflPage;
