import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

class Content extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  componentWillMount() {
    this.context.setTitle(this.props.title);
  }

  render() {
    return (
      <PageContainer>
        {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
      </PageContainer>
    );
  }

}

export default Content;
