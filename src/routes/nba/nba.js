import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Link from '../../components/link';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

class NBA extends Component {
  render() {
    const { title } = this.props;

    return (
      <PageContainer>
        <h3>{title}</h3>
        <Link navigationLink={true} to="/nba/blog/latest">NBA Blog</Link>
        <h4>Visit faketrademachine.com for a beta version for an NBA Trade simulator</h4>
      </PageContainer>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NBA)
