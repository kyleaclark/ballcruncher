import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

import Link from '../../link/link';
import Table from '../../core/table/table';
import Format from '../../../utils/format';
import Dropdown from '../../core/dropdown';

import { getRankings } from '../../../actions/index';

const DetailsList = styled.ul`
  font-weight: 600;
`;

// TODO: Dynamically generate Years and Weeks from a utility service or API data source
const yearsList = [2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009];

class NflPowerRankings extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let columns = this._buildTableColumns();
    let yearSelectionOptions = this._buildYearSelectionOptions();
    let weekSelectionOptions = this._buildWeekSelectionOptions();

    let initialState = {
      columns,
      yearSelectionOptions,
      weekSelectionOptions
    };

    let builtState = Object.assign({}, initialState, this._buildRankings());
    this.setState(builtState);
  }

  _buildTableColumns() {
    let columns = [
      { label: null, property: '_index', title: 'Rank', className: 'view__nfl_power_rankings--rank-index' },
      { label: 'Team', property: 'id', title: 'Team', sortable: true },
      { label: 'Wins', property: 'wins', title: 'Wins', sortable: true },
      { label: 'Losses', property: 'losses', title: 'Losses', sortable: true },
      { label: 'Power Rating', property: 'power_ranking', formatter: this._formatDecimal, title: 'Power Rating', sortable: true }
    ];

    if (this.props.fullRankings) {
      columns[1].label = 'Tm';
      columns[2].label = 'Ws';
      columns[3].label = 'Ls';
      columns[4].label = 'Pwr Rating';

      columns = columns.concat([
        { label: 'SoS', property: 'sos', formatter: this._formatSpecialDecimal, title: 'Strength of Schedule', sortable: true },
        { label: 'SoV', property: 'sov', formatter: this._formatSpecialDecimal, title: 'Strength of Victory', sortable: true },
        { label: 'Pt Diff', property: 'point_differential', title: 'Point Differential', sortable: true },
        { label: 'Avg Pts', property: 'points_scored_avg', formatter: this._formatDecimal, title: 'Points Scored Per Game', sortable: true },
        { label: 'Avg Against', property: 'points_against_avg', formatter: this._formatDecimal, title: 'Points Against Per Game', sortable: true },
        { label: 'Turnover Diff', property: 'turnover_differential', title: 'Turnover Differential', sortable: true }
      ])
    }

    return columns;
  }

  _buildYearSelectionOptions() {
    let yearSelectionOptions = yearsList.map((item) => {
      return {
        value: item,
        label: item.toString()
      }
    })

    return yearSelectionOptions
  }

  _buildWeekSelectionOptions() {
    let weekSelectionOptions = {}

    let rankings = {}
    yearsList.forEach((item) => {
      rankings[item] = []
      for (let weekIndex = 1; weekIndex < 18; weekIndex++) {
        rankings[item].push({
          week: weekIndex
        })
      }
    })

    Object.keys(rankings).forEach((key) => {
      weekSelectionOptions[key] = this._buildSingleYearWeekSelectionOptions(rankings[key])
    });

    return weekSelectionOptions
  }

  _buildSingleYearWeekSelectionOptions(rankingsList) {
    let options = rankingsList.map((item, index) => {
      let week = index + 1
      let label = ' Week ' + week

      return {
        value: week,
        label: label
      }
    })

    return options.reverse()
  }

  _buildRankings(yearValue) {
    let rankingsMap = this.props.rankings

    let selectedYear = yearValue || yearsList[0]
    let rankingsList = rankingsMap[selectedYear]
    let selectedWeek = 17

    return {
      selectedYear,
      rankingsList,
      selectedWeek
    }
  }

  // TODO: Move to Format Util
  _formatDecimal(num) {
    return Format.toFixedFloat(num, 2)
  }

  // TODO: Move to Format Util
  _formatSpecialDecimal(num) {
    const fixedNum = Format.toFixedFloat(num, 2)
    return Format.stripLeadingZero(fixedNum)
  }

  _onYearSelect(option) {
    this.props.getRankings(option.value, this.state.selectedWeek)
      .then(() => {
        this.setState((prevState, props) => ({
          selectedYear: option.value
        }));
      })
      .catch((error) => {
        // TODO: Handle error in the UI for the user
        console.error('getRankings : ', error)
      })
  }

  _onWeekSelect(option) {
    this.props.getRankings(this.state.selectedYear, option.value)
      .then(() => {
        this.setState((prevState, props) => ({
          selectedWeek: option.value
        }));
      })
      .catch((error) => {
        // TODO: Handle error in the UI for the user
        console.error('getRankings : ', error)
      })
  }

  _renderYearSelection() {
    const currentOption = this.state.yearSelectionOptions.find(year => {
      return year.value === this.state.selectedYear
    })

    return (
      <Dropdown
        options={this.state.yearSelectionOptions}
        onChange={this._onYearSelect.bind(this)}
        value={currentOption}
        placeholder="Select an option"
      />
    )
  }

  _renderWeekSelection() {
    const weekSelectionOptions = this.state.weekSelectionOptions[this.state.selectedYear]
    const currentOption = weekSelectionOptions.find(week => {
      return week.value === this.state.selectedWeek
    })

    return (
      <Dropdown
        options={weekSelectionOptions}
        onChange={this._onWeekSelect.bind(this)}
        value={currentOption}
      />
    )
  }

  _renderDetails() {
    return (
      <div>
        <h4>Breakdown of the power ranking formula:</h4>
        <DetailsList>
          <li><span>victory value (25%)</span> - teams wins * strength of victory (relative scale of 0 to 100 by the highest upper bound value)</li>

          <li><span>pythagorean win value (25%)</span> - points scored) / (points scored + points against) * games played (relative scale of0 to 100 by the highest upper bound value)</li>

          <li><span>point differential value (25%)</span> - (ppg differential plus/minus average * strength of schedule (relative scale of 0 to 100 by the highest upper bound value)</li>

          <li><span>win_percentage value (10%)</span> - win percentage (relative scale of 0 to 100 by the highest upper bound value)</li>

          <li><span>points scored value (5%)</span> — points scored (relative scale of 0 to 100 by the highest upper bound value i.e. league best 28 points equals 100, 21 equals 75, and 14 points equals 50 on the scale)</li>

          <li><span>points against value (5%)</span> — points against (relative scale of 0 to 100 by the lowest lower bound value i.e. league best 14 points equals 100, 21 equals ~66, and 28 points equals 50 on the scale)</li>

          <li><span>turnover differential value (5%)</span> - turnover_differential plus/minus (relative scale of -100 to 100 by the lowest lower bound value)</li>

        </DetailsList>

        <code>
          Legend:<br />
          RK  = Power Ranking<br />
          TM  = Team<br />
          W = Wins<br />
          L = Losses<br />
          PWR = Power Ranking Score<br />
          SOS = Strength of Schedule<br />
          SOV = Strength of Victory<br />
          PDV = Point Differential Value<br />
          PSV = Points Scored Value<br />
          PAV = Points Against Value<br />
          TDV = Turnover Differential Value
        </code>

        <br /><br />

        <Link external={true} type='text' to='https://github.com/kyleaclark/nfl-power-rankings' target='_blank'>View the data model source code on GitHub</Link>
      </div>
    )
  }

  render() {
    const rankingId = this.state.selectedYear + '_' + this.state.selectedWeek
    let tableData = this.props.rankings[rankingId].data,
        tableColumns = this.state.columns,
        sortBy = {
          property: 'power_ranking',
          order: 'descending'
        }

    return (
      <div>
        {tableData &&
          <div>
            {this._renderYearSelection()}
            {this._renderWeekSelection()}
            <Table
              key={'nfl_rankings_table_' + this.state.selectedWeek}
              columns={tableColumns}
              keys={['id']}
              sortBy={sortBy}
              tableData={tableData}
            />
          </div>
        }

        {tableData && this.props.fullRankings && this._renderDetails()}
      </div>
    )
  }

}

export default NflPowerRankings;
