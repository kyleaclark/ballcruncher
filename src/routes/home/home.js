import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Link from '../../components/link';
import BlogEntries from '../../components/views/blog_entries';
import NflPowerRankings from '../../components/views/nfl_power_rankings';

import * as RankingsActions from '../../actions/index';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

const PageSubTitle = styled.h4`
  margin: 0px;
  padding: 0px;
`;

const PageSubHeadline = styled.p`
  margin: 0px;
  padding: 0px;
`;

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
      <PageContainer>

        <PageSubTitle>Data analysis of weekly NFL Power Rankings and annual Fantasy Football Rankings.</PageSubTitle>

        <PageSubHeadline>Learn more about the data models on the bottom of the <Link type={'text'} to="/nfl">NFL</Link> and <Link type={'text'} to="/fantasy-football">Fantasy Football</Link> pages.</PageSubHeadline>

        <hr />

        <h3>NFL Power Rankings</h3>

        {this._renderRankings()}

      </PageContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
