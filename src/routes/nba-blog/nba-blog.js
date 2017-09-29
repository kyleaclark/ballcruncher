import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

const BlogTitle = styled.h2`
  border-bottom: 1px solid #ddd;
  margin-bottom: 2px;
  padding-bottom: 2px;
  text-transform: uppercase;
`;

const BlogDetails = styled.h4`
  font-size: 14px;
  font-weight: 300;
  margin-top: 0;
`;

const BlogContent = styled.div`
  font-size: 18px;
  font-weight: 400;
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
    const { title, publishDate, author, html } = this.props;

    return (
      <PageContainer>
        <BlogTitle>{title}</BlogTitle>
        <BlogDetails>{publishDate}<br />by {author}</BlogDetails>
        <BlogContent dangerouslySetInnerHTML={{ __html: html }} />
      </PageContainer>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NbaBlog)
