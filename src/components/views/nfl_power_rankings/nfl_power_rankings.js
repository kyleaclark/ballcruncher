import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './nfl_power_rankings.css'
import Table from '../../core/table/table'
import Format from '../../../utils/format'
import Dropdown from '../../core/dropdown'

import { getRankings } from '../../../actions/index'

class NflPowerRankings extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let columns = this._buildTableColumns()
    let yearSelectionOptions = this._buildYearSelectionOptions()
    let weekSelectionOptions = this._buildWeekSelectionOptions()

    let initialState = {
      columns,
      yearSelectionOptions,
      weekSelectionOptions
    }

    let builtState = Object.assign({}, initialState, this._buildRankings())
    this.setState(builtState)
  }

  _buildTableColumns() {
    let columns = [
      { label: null, property: '_index', title: 'Rank', className: 'view__nfl_power_rankings--rank-index' },
      { label: 'Team', property: 'id', title: 'Team', sortable: true },
      { label: 'Wins', property: 'wins', title: 'Wins', sortable: true },
      { label: 'Losses', property: 'losses', title: 'Losses', sortable: true },
      { label: 'Power Rating', property: 'power_ranking', formatter: this._formatDecimal, title: 'Power Rating', sortable: true }
    ]

    if (this.props.fullRankings) {
      columns[1].label = 'TM'
      columns[2].label = 'W'
      columns[3].label = 'L'
      columns[4].label = 'PWR'

      columns = columns.concat([
        { label: 'SOS', property: 'sos', formatter: this._formatSpecialDecimal, title: 'Strength of Schedule', sortable: true },
        { label: 'SOV', property: 'sov', formatter: this._formatSpecialDecimal, title: 'Strength of Victory', sortable: true },
        { label: 'PD', property: 'point_differential', title: 'Point Differential', sortable: true },
        { label: 'PS', property: 'points_scored_avg', formatter: this._formatDecimal, title: 'Points Scored Per Game', sortable: true },
        { label: 'PA', property: 'points_against_avg', formatter: this._formatDecimal, title: 'Points Against Per Game', sortable: true },
        { label: 'TD', property: 'turnover_differential', title: 'Turnover Differential', sortable: true }
      ])
    }

    return columns
  }

  _buildYearSelectionOptions() {
    const yearsList = this.props.rankings.yearsList

    let yearSelectionOptions = yearsList.map((item) => {
      return {
        value: item,
        label: item.toString()
      }
    })

    return yearSelectionOptions
  }

  _buildWeekSelectionOptions() {
    const rankings = this.props.rankings.values

    let weekSelectionOptions = {}
    Object.keys(rankings).forEach((key) => {
      let rankingsList = rankings[key]
      weekSelectionOptions[key] = this._buildSingleYearWeekSelectionOptions(rankingsList)
    });

    return weekSelectionOptions
  }

  _buildSingleYearWeekSelectionOptions(rankingsList) {
    let options = rankingsList.map((item, index) => {
      let week = index + 1
      let label = ' Week ' + week

      return {
        value: index,
        label: label
      }
    })

    return options.reverse()
  }

  _buildRankings(yearValue) {
    let rankingsMap = this.props.rankings.values
    let yearsList = this.props.rankings.yearsList

    let selectedYear = yearValue || yearsList[0]
    let rankingsList = rankingsMap[selectedYear]
    let selectedWeekValue = rankingsList.length - 1

    return {
      selectedYear,
      rankingsList,
      selectedWeekValue
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
    const rankings = this._buildRankings(option.value)
    this.setState(rankings)
  }

  _onWeekSelect(option) {
    this.setState({ selectedWeekValue: option.value })
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
      return week.value === this.state.selectedWeekValue
    })

    return (
      <Dropdown
        options={weekSelectionOptions}
        onChange={this._onWeekSelect.bind(this)}
        value={currentOption}
        placeholder="Select an option"
      />
    )
  }

  _renderDetails() {
    return (
      <div>
        <h4>Breakdown of the power ranking formula:</h4>
        <ul className={s.formula_details_list}>
          <li><span>victory value (25%)</span> - teams wins * strength of victory (relative scale of 0 to 100 by the highest upper bound value)</li>

          <li><span>pythagorean win value (25%)</span> - points scored) / (points scored + points against) * games played (relative scale of0 to 100 by the highest upper bound value)</li>

          <li><span>point differential value (25%)</span> - (ppg differential plus/minus average * strength of schedule (relative scale of 0 to 100 by the highest upper bound value)</li>

          <li><span>win_percentage value (10%)</span> - win percentage (relative scale of 0 to 100 by the highest upper bound value)</li>

          <li><span>points scored value (5%)</span> — points scored (relative scale of 0 to 100 by the highest upper bound value i.e. league best 28 points equals 100, 21 equals 75, and 14 points equals 50 on the scale)</li>

          <li><span>points against value (5%)</span> — points against (relative scale of 0 to 100 by the lowest lower bound value i.e. league best 14 points equals 100, 21 equals ~66, and 28 points equals 50 on the scale)</li>

          <li><span>turnover differential value (5%)</span> - turnover_differential plus/minus (relative scale of -100 to 100 by the lowest lower bound value)</li>

        </ul>

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

        <a href='https://github.com/kyleaclark/nfl-power-rankings' className={s.github__link} target='_blank'>View the data model source code on GitHub</a>
      </div>
    )
  }

  render() {
    var tableData = this.state.rankingsList[this.state.selectedWeekValue].data,
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
              key={'nfl_rankings_table_' + this.state.selectedWeekValue}
              className={s.table__component}
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

export default withStyles(s)(NflPowerRankings)
