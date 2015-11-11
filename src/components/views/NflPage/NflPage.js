/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './NflPage.css';
import withStyles from '../../../decorators/withStyles';
import RankingsStore from '../../../stores/RankingsStore';
import ActionCreator from '../../../actions/ActionCreator';
import Table from '../../core/table/table';
import Format from '../../../utils/format';

@withStyles(styles)
class NflPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rankings: []
    };

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    RankingsStore.addChangeListener(this._onChange);
  }

  componentDidMount() {
    ActionCreator.getRankings();
  }

  componentWillUnmount() {
    RankingsStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      rankings: RankingsStore.getRankings()
    });
  }

  _buildTableColumns() {
    return [
      { label: 'TM', property: 'id', title: 'Team' },
      { label: 'W', property: 'wins', title: 'Wins' },
      { label: 'L', property: 'losses', title: 'Losses' },
      { label: 'RNK', property: 'power_ranking', formatter: this._formatDecimal, title: 'Ranking' },
      { label: 'SOS', property: 'sos', formatter: this._formatSpecialDecimal, title: 'Strength of Schedule' },
      { label: 'SOV', property: 'sov', formatter: this._formatSpecialDecimal, title: 'Strength of Victory' },
      { label: 'PD', property: 'point_differential', title: 'Point Differential' },
      { label: 'PS', property: 'points_scored_avg', formatter: this._formatDecimal, title: 'Points Scored Per Game' },
      { label: 'PA', property: 'points_against_avg', formatter: this._formatDecimal, title: 'Points Against Per Game' },
      { label: 'TD', property: 'turnover_differential', title: 'Turnover Differential' }
    ];
  }

  _formatDecimal(num) {
    return Format.toFixedFloat(num, 2);
  }

  _formatSpecialDecimal(num) {
    var fixedNum = Format.toFixedFloat(num, 2);

    return Format.stripLeadingZero(fixedNum);
  }

  render() {
    var tableData,
        tableColumns = this._buildTableColumns(),
        sortBy = {
          property: 'power_ranking',
          order: 'descending'
        };

    const title = 'Contact Us';

    this.context.onSetTitle(title);

    if (this.state.rankings.length) {
      tableData = this.state.rankings[0].data;
    }

    return (
      <div className="NflPage">
        <div className="NflPage-container">
          <h3 className='title'>NFL Power Rankings</h3>

          {tableData && <div>
            <h5 style={{marginTop: '40px'}}><strong>WEEK 9:</strong></h5>
            <Table
              key='nfl_rankings_table'
              className="table-component"
              columns={tableColumns}
              keys={['id']}
              sortBy={sortBy}
              tableData={tableData}
            />
          </div>}

        </div>
      </div>
    );
  }

}

export default NflPage;
