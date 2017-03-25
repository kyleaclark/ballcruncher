import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './home.css'

import Link from '../../components/link'
import BlogEntries from '../../components/views/blog_entries'
import NflPowerRankings from '../../components/views/nfl_power_rankings'
import ballcruncherImage from '../../images/ballcruncher-small.jpg'

import * as RankingsActions from '../../actions/index'

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

  componentDidMount() {
    window.analytics.page()
  }

  render () {
    return (
      <div className={s.page}>
        <div className={s.page__container}>

          <h3 className={s.homepage__data_title}>Welcome to Ballcruncher</h3>

          <p>Sports analytics data covering weekly NFL Power Rankings and annual Fantasy Football Rankings.<br />Learn more about the data models used to make the rankings calculations on the <Link className={s.home__link} to="/nfl">NFL</Link> and <Link className={s.home__link} to="/fantasy-football">FFB</Link> pages.</p>

          <hr />

          <div>
            <div className={s.page__primary}>
              <h4 className={s.homepage__data_title}>NFL Power Rankings</h4>
              <h6 className={s.homepage__data_subtitle}><a href="/nfl" onClick={Link.handleClick}>View the full rankings</a></h6>

              {this._renderRankings()}
            </div>

            <div className={s.page__sidebar}>
              <h4 className={s.page__sidebar_title}>Latest Blog Entries:</h4>
              <img src={ballcruncherImage} alt="Ballcruncher" />
              <br /><br />

              <BlogEntries />
            </div>

            <div className={s.clear}></div>
          </div>
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
