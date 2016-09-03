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

    return options
  }

  _buildRankings(yearValue) {
    let rankingsMap = this.props.rankings.values
    let yearsList = this.props.rankings.yearsList

    let selectedYear = yearValue || yearsList[0]
    let rankingsList = rankingsMap[selectedYear]
    let selectedWeekIndex = rankingsList.length - 1

    return {
      selectedYear,
      rankingsList,
      selectedWeekIndex
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
    this.setState({ selectedWeekIndex: option.value })
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
    const value = weekSelectionOptions[this.state.selectedWeekIndex]

    return (
      <Dropdown
        options={weekSelectionOptions}
        onChange={this._onWeekSelect.bind(this)}
        value={value}
        placeholder="Select an option"
      />
    )
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

        <span>&raquo </span>
        <a href='https://github.com/kyleaclark/nfl-power-rankings' target='_blank'>View the data model source code on GitHub</a>
      </div>
    )
  }

  render() {
    var tableData = this.state.rankingsList[this.state.selectedWeekIndex].data,
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
              key={'nfl_rankings_table_' + this.state.selectedWeekIndex}
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
