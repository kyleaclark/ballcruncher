/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './nfl_power_rankings.css';
import withStyles from '../../../decorators/withStyles';
import RankingsStore from '../../../stores/RankingsStore';
import ActionCreator from '../../../actions/ActionCreator';
import Table from '../../core/table/table';
import Format from '../../../utils/format';
import Dropdown from '../../core/dropdown'

@withStyles(styles)
class NflPowerRankings extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedRankingsIndex: 0,
      rankings: []
    };

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    RankingsStore.addChangeListener(this._onChange);
    ActionCreator.getRankings();
  }

  componentWillUnmount() {
    RankingsStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    const rankings = RankingsStore.getRankings();

    let week,
        label,
        options = [];

    for (let index = 0; index < rankings.length; index++) {
      week = index + 2;
      label = week === 18 ? 'End of Season' : 'Week ' + week;
      options.push({
        value: index,
        label: label
      })
    }

    this.setState({
      rankings: rankings,
      selectedRankingsIndex: rankings.length - 1,
      weekSelectionOptions: options
    });
  }

  _buildTableColumns() {
    var columns = [
      { label: null, property: '_index', title: 'Rank', className: 'view__nfl_power_rankings--rank-index' },
      { label: 'Team', property: 'id', title: 'Team', sortable: true },
      { label: 'Wins', property: 'wins', title: 'Wins', sortable: true },
      { label: 'Losses', property: 'losses', title: 'Losses', sortable: true },
      { label: 'Power Rating', property: 'power_ranking', formatter: this._formatDecimal, title: 'Power Rating', sortable: true }
    ];

    if (this.props.fullRankings) {
      columns[1].label = 'TM';
      columns[2].label = 'W';
      columns[3].label = 'L';
      columns[4].label = 'PWR';

      columns = columns.concat([
        { label: 'SOS', property: 'sos', formatter: this._formatSpecialDecimal, title: 'Strength of Schedule', sortable: true },
        { label: 'SOV', property: 'sov', formatter: this._formatSpecialDecimal, title: 'Strength of Victory', sortable: true },
        { label: 'PD', property: 'point_differential', title: 'Point Differential', sortable: true },
        { label: 'PS', property: 'points_scored_avg', formatter: this._formatDecimal, title: 'Points Scored Per Game', sortable: true },
        { label: 'PA', property: 'points_against_avg', formatter: this._formatDecimal, title: 'Points Against Per Game', sortable: true },
        { label: 'TD', property: 'turnover_differential', title: 'Turnover Differential', sortable: true }
      ]);
    }

    return columns;
  }

  _formatDecimal(num) {
    return Format.toFixedFloat(num, 2);
  }

  _formatSpecialDecimal(num) {
    var fixedNum = Format.toFixedFloat(num, 2);

    return Format.stripLeadingZero(fixedNum);
  }

  _onWeekSelect(option) {
    this.setState({ selectedRankingsIndex: option.value });
  }

  _renderWeekSelection() {
    const value = this.state.weekSelectionOptions[this.state.selectedRankingsIndex],
          options = this.state.weekSelectionOptions.slice().reverse();

    return (
      <Dropdown
        options={options}
        onChange={this._onWeekSelect.bind(this)}
        value={value}
        placeholder="Select an option"
      />
    );
  }

  _renderDetails() {
    return (
      <div>
        <code>
          Legend:
          RK  = Power Ranking,
          TM  = Team,
          W = Wins,
          L = Losses,
          PWR = Power Ranking Score,
          SOS = Strength of Schedule,
          SOV = Strength of Victory,
          PDV = Point Differential Value,
          PSV = Points Scored Value,
          PAV = Points Against Value,
          TDV = Turnover Differential Value
        </code>

        <br /><br />

        <span>&raquo; </span><a href='https://github.com/kyleaclark/nfl-power-rankings' target='_blank' style={{textDecoration: 'underline'}}>View the data model source code on GitHub</a>
      </div>
    )
  }

  render() {
    var tableData,
        tableColumns = this._buildTableColumns(),
        sortBy = {
          property: 'power_ranking',
          order: 'descending'
        };

    if (this.state.rankings.length) {
      tableData = this.state.rankings[this.state.selectedRankingsIndex].data;
    }

    return (
      <div>
        {tableData &&
          <div>
            {this._renderWeekSelection()}
            <Table
              key={'nfl_rankings_table_' + this.state.selectedRankingsIndex}
              className="table__component"
              columns={tableColumns}
              keys={['id']}
              sortBy={sortBy}
              tableData={tableData}
            />
          </div>
        }

        {tableData && this.props.fullRankings && this._renderDetails()}
      </div>
    );
  }

}

export default NflPowerRankings;
