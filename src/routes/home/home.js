import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './home.css';
import Link from '../../components/link';
import BlogEntries from '../../components/views/blog_entries';
import NflPowerRankings from '../../components/views/nfl_power_rankings';
import ballcruncherImage from '../../images/ballcruncher-small.jpg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as RankingsActions from '../../actions/index';

const title = 'Ballcruncher - Home';

class Home extends Component {
//function Home({ rankings }, context) {
  //context.setTitle(title);

  render () {
    console.log('render home');
    console.log('this.props.rankings : ', this.props.rankings);
    const rankings = this.props.rankings;
    const hasRankings = rankings && rankings.length;

    return (
      <div className={s.page}>
        <div className={s.page__container}>
          <div>
            <div className={s.page__primary}>
              <h1 className={s.page__title}>Welcome to Ballcruncher</h1>

              <hr />

              <h4 className={s.homepage__data_title}>NFL Power Rankings</h4>
              <h6 className={s.homepage__data_subtitle}><a href="/nfl" onClick={Link.handleClick}>View the full rankings</a></h6>

              {hasRankings &&
                <NflPowerRankings rankings={rankings} {...this.props.actions} />
              }
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
    );
  }
}

//Home.contextTypes = { setTitle: PropTypes.func.isRequired };

function mapStateToProps(state) {
  return {
    rankings: state.rankings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RankingsActions, dispatch)
  };
}
export default withStyles(s)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
