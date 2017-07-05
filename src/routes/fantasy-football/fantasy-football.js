import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Link from '../../components/link';
import FantasyFootballRankings from '../../components/views/fantasy_football_rankings';

import * as RankingsActions from '../../actions/fantasy-football-rankings';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

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

class FantasyFootball extends Component {

  _renderRankings () {
    const rankings = this.props.fantasyFootballRankings;
    const emptyRankings = Object.keys(rankings).length === 0;

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
      <PageContainer>

          <h3>Fantasy Football Rankings</h3>
          <p>Projections from 2015 fantasy production, as past performance is a useful predictor of future outcomes.</p>

          {this._renderRankings()}

      </PageContainer>
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FantasyFootball)
