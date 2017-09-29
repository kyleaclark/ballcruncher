import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Link from '../../components/link';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

const BlogSubTitle = styled.h5`
  margin-top: 2px;
  margin-bottom: 0;
`;

const BlogDetails = styled.h5`
  font-size: 0.8em;
  font-weight: 300;
  margin-top: 0;
`;

const NbaSubContent = styled.div`
  border-top: 1px dashed #ddd;
  margin-top: 25px;
  padding-top: 10px;
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
        <h3>NBA Blog</h3>
        <p>Introducing the NBA content section at Ballcruncher.</p>
        <div>
          <Link navigationLink={true} to='/nba/blog/2017-09-28-the-gimmicked-70'>The Gimmicked 70</Link>
          <BlogSubTitle>The night Devin Booker went off for 70 and was labeled "gimmicked."</BlogSubTitle>
          <BlogDetails>September 28, 2017 by Kyle Clark</BlogDetails>
        </div>
        <NbaSubContent>
          <Link external type='text' to='http://www.faketrademachine.com/' target='_blank'>Fake Trade Machine</Link>
          <BlogSubTitle>Visit faketrademachine.com for a beta version of an NBA Trade simulator</BlogSubTitle>
          <BlogDetails>Beta released on August 10, 2017 developed by Kyle Clark</BlogDetails>
        </NbaSubContent>
      </PageContainer>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NBA)
