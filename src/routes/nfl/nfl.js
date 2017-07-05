import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Link from '../../components/link';
import NflPowerRankings from '../../components/views/nfl_power_rankings';

import * as RankingsActions from '../../actions/index';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
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
      <PageContainer>

          <h3>NFL Power Rankings</h3>

          {this._renderRankings()}

      </PageContainer>
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nfl)
