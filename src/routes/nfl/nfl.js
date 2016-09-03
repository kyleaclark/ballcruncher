import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './nfl.css'

import Link from '../../components/link'
import NflPowerRankings from '../../components/views/nfl_power_rankings'

import * as RankingsActions from '../../actions/index'

class Nfl extends Component {

  _renderRankings () {
    const rankings = this.props.rankings
    const emptyRankings = Object.keys(rankings).length === 0

    if (!emptyRankings) {
      return (
        <NflPowerRankings
          rankings={rankings}
          fullRankings={true}
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

            <h1 className={s.page__title}>NFL Power Rankings</h1>

            {this._renderRankings()}

        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    rankings: state.rankings
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
)(Nfl))
