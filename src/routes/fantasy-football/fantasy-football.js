import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './fantasy-football.css'

import Link from '../../components/link'
import FantasyFootballRankings from '../../components/views/fantasy_football_rankings'

import * as RankingsActions from '../../actions/fantasy-football-rankings'

class FantasyFootball extends Component {

  _renderRankings () {
    const rankings = this.props.fantasyFootballRankings
    const emptyRankings = Object.keys(rankings).length === 0

    if (!emptyRankings) {
      return (
        <FantasyFootballRankings
          rankings={rankings}
          {...this.props.actions}
        />
      )
    } else {
      return (
        <h4>Please wait, loading...</h4>
      )
    }
  }

  render () {
    return (
      <div className={s.page}>
        <div className={s.page__container}>

            <h3 className={s.page__title}>Fantasy Football Rankings</h3>
            <h6>The data represents 2015 fantasy production, but past performance is a useful predictor of future outcomes.</h6>

            {this._renderRankings()}

        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    fantasyFootballRankings: state.fantasyFootballRankings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RankingsActions, dispatch)
  }
}

export default withStyles(s)(connect(
  mapStateToProps,
  mapDispatchToProps
)(FantasyFootball))
