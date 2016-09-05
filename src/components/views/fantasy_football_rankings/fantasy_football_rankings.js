import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './fantasy_football_rankings.css'
import Table from '../../core/table/table'
import Format from '../../../utils/format'
import Dropdown from '../../core/dropdown'

import { getRankings } from '../../../actions/fantasy-football-rankings'

class FantasyFootballRankings extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let columns = this._buildTableColumns()
    let yearSelectionOptions = this._buildYearSelectionOptions()
    let positionSelectionOptions = this._buildPositionSelectionOptions()

    let initialState = {
      columns,
      yearSelectionOptions,
      positionSelectionOptions
    }

    let builtState = Object.assign({}, initialState, this._buildRankings())
    this.setState(builtState)
  }

  _buildTableColumns() {
    let columns = [
      { label: null, property: '_index', title: 'Rank', className: 'view__fantasy_football_rankings--rank-index' },
      { label: 'Player', property: 'player', title: 'Player', sortable: true },
      { label: 'Total Pts', property: 'pts', formatter: this._formatDecimal, title: 'Total Pts', sortable: true },
      { label: 'Avg Pts', property: 'avg_pts', formatter: this._formatDecimal, title: 'Avg Pts', sortable: true },
      { label: '+/-', property: 'plus_minus', formatter: this._formatDecimal, title: '+/-', sortable: true },
      { label: 'Auction Value', property: 'auction_value', formatter: this._formatDecimal, title: 'Auction Value', sortable: true }
    ]

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

  _buildPositionSelectionOptions() {
    const rankings = this.props.rankings.values

    let positionSelectionOptions = {}
    Object.keys(rankings).forEach((key) => {
      let rankingsList = rankings[key]
      positionSelectionOptions[key] = this._buildSingleYearPositionSelectionOptions(rankingsList)
    });

    return positionSelectionOptions
  }

  _buildSingleYearPositionSelectionOptions(rankingsList) {
    const optionsOrderConfig = { qb: 0, rb: 1, wr: 2, te: 3 }

    let options = new Array(4)
    rankingsList.forEach((item, index) => {
      options[optionsOrderConfig[item.position]] = {
        value: index,
        label: item.year + ' - ' + item.position.toUpperCase()
      }
    })

    return options
  }

  _buildRankings(yearValue) {
    let rankingsMap = this.props.rankings.values
    let yearsList = this.props.rankings.yearsList

    let selectedYear = yearValue || yearsList[0]
    let rankingsList = rankingsMap[selectedYear]
    let selectedPositionValue = 0

    return {
      selectedYear,
      rankingsList,
      selectedPositionValue
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

  _onPositionSelect(option) {
    this.setState({ selectedPositionValue: option.value })
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

  _renderPositionSelection() {
    const positionSelectionOptions = this.state.positionSelectionOptions[this.state.selectedYear]
    const currentOption = positionSelectionOptions.find(position => {
      return position.value === this.state.selectedPositionValue
    })

    return (
      <Dropdown
        options={positionSelectionOptions}
        onChange={this._onPositionSelect.bind(this)}
        value={currentOption}
        placeholder="Select an option"
      />
    )
  }

  _renderDetails() {
    return (
      <div>
        <h4>Breakdown of the auction value formula:</h4>
        <ol className={s.formula_details_list}>
          <li><span>relative positional median value</span> - a player&apos;s average points scored per game divided by the median of average points scored per game cumulative for a position</li>

          <li><span>relative positional top quarter value</span> - a player&apos;s average points scored per game divided by the top quarter median of average points scored per game cumulative for a position</li>

          <li><span>multiplied value of relative positional median &amp; top quarter value</span> - relative positional median value multiplied by relative positional top quarter value</li>

          <li><span>squared value of the multiplied value</span> - squared value of the multiple of relative positional median &amp; top quarter value</li>

          <li><span>squared value scaled by availability</span> - squared value of the multiple of relative positional median &amp; top quarter value, then scaled by the percentage of games a player played in weeks 1 through 16</li>

        </ol>

        <a href='https://github.com/kyleaclark/fantasy-football-stats' className={s.github__link} target='_blank'>View the data model source code on GitHub</a>
      </div>
    )
  }

  render() {
    var tableData = this.state.rankingsList[this.state.selectedPositionValue].data,
        tableColumns = this.state.columns,
        sortBy = {
          property: 'auction_value',
          order: 'descending'
        }

    return (
      <div>
        {tableData &&
          <div>
            {this._renderPositionSelection()}
            <Table
              key={'fantasy_football_rankings_table_' + this.state.selectedPositionValue}
              className={s.table__component}
              rowClassNameKey={'default'}
              columns={tableColumns}
              keys={['player']}
              sortBy={sortBy}
              tableData={tableData}
            />
          </div>
        }

        {this._renderDetails()}
      </div>
    )
  }

}

export default withStyles(s)(FantasyFootballRankings)
