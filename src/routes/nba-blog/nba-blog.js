import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

class NbaBlog extends Component {
  render() {
    const { title, html } = this.props;

    return (
      <PageContainer>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PageContainer>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NbaBlog)
