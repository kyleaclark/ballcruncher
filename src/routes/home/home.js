import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './home.css'

import Link from '../../components/link'
import BlogEntries from '../../components/views/blog_entries'
import NflPowerRankings from '../../components/views/nfl_power_rankings'
import ballcruncherImage from '../../images/ballcruncher-small.jpg'

import * as RankingsActions from '../../actions/index'

const PageSubTitle = styled.h4`
  margin: 0px;
  padding: 0px;
`

const PageSubHeadline = styled.p`
  margin: 0px;
  padding: 0px;
`

class Home extends Component {

  _renderRankings() {
    const rankings = this.props.rankings
    const emptyRankings = Object.keys(rankings).length === 0

    if (!emptyRankings) {
      return (
        <NflPowerRankings rankings={rankings} {...this.props.actions} />
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

          <PageSubTitle>Data analysis of weekly NFL Power Rankings and annual Fantasy Football Rankings.</PageSubTitle>

          <PageSubHeadline>Learn more about the data models created at the bottom of the page on <Link className={s.home__link} to="/nfl">NFL</Link> and <Link className={s.home__link} to="/fantasy-football">FFB</Link> pages.</PageSubHeadline>

          <hr />

          <h3 className={s.page__title}>NFL Power Rankings</h3>

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
)(Home))
