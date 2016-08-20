import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './nfl_power_rankings.css'
import Table from '../../core/table/table'
import Format from '../../../utils/format'
import Dropdown from '../../core/dropdown'

import { getRankings } from '../../../actions/index'

// TODO: Move this into some other type of configuration
const yearValues = [2015, 2014, 2013, 2012, 2011, 2010, 2009]
let yearSelectionOptions = []
yearValues.forEach(function (item) {
  yearSelectionOptions.push({
    value: item,
    label: item.toString()
  })
})

class NflPowerRankings extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedWeekIndex: 0,
      selectedYear: 2015,
      rankingsList: []
    }
  }

  componentWillMount() {
    this._buildInitialRankings(this.state.selectedYear)
  }

  _buildInitialRankings() {
    let selectedYear = this.state.selectedYear
    let rankingsList = this.props.rankings[selectedYear] || []
    let options = this._generateOptions(rankingsList)

    this.setState({
      columns : this._buildTableColumns(),
      rankingsList: rankingsList,
      selectedWeekIndex: rankingsList.length - 1,
      weekSelectionOptions: options,
      selectedYear: selectedYear
    })
  }

  // TODO: Fix duplicate logic with _buildInitialRankings
  _updateRankingsList(selectedYear) {
    let rankingsList = this.props.rankings[selectedYear] || []
    let options = this._generateOptions(rankingsList)

    this.setState({
      rankingsList: rankingsList,
      selectedWeekIndex: rankingsList.length - 1,
      weekSelectionOptions: options,
      selectedYear: selectedYear
    })
  }

  _generateOptions(rankingsList) {
    let week,
        label,
        options = []

    rankingsList.forEach(function (item, index) {
      week = index + 1
      label = ' Week ' + week
      options.push({
        value: index,
        label: label
      })
    })

    return options
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

  // TODO: Move to Format Util
  _formatDecimal(num) {
    return Format.toFixedFloat(num, 2)
  }

  // TODO: Move to Format Util
  _formatSpecialDecimal(num) {
    var fixedNum = Format.toFixedFloat(num, 2)

    return Format.stripLeadingZero(fixedNum)
  }

  _onYearSelect(option) {
    this.props.getRankings(option.value).then((data) => {
      this._updateRankingsList(option.value)
    }).catch((error) => {
      // TODO: Handle error
      console.log({ error })
    })
  }

  _onWeekSelect(option) {
    this.setState({ selectedWeekIndex: option.value })
  }

  _renderYearSelection() {
    const currentOption = yearSelectionOptions.find(year => {
      return year.value === this.state.selectedYear
    })

    return (
      <Dropdown
        options={yearSelectionOptions}
        onChange={this._onYearSelect.bind(this)}
        value={currentOption}
        placeholder="Select an option"
      />
    )
  }

  _renderWeekSelection() {
    const value = this.state.weekSelectionOptions[this.state.selectedWeekIndex],
          options = this.state.weekSelectionOptions.slice().reverse()

    return (
      <Dropdown
        options={options}
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
