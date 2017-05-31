import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../link';
import Navigation from '../navigation';

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme['gray-dark']};
  border-bottom: 1px solid ${props => props.theme['gray-lightest']};
  color: ${props => props.theme['gray-dark']};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  max-width: ${props => props.theme['max-content-width']};
`;

const Title = styled.h1`
  color: ${props => props.theme['gray-lightest']};
  display: block;
  font-size: 1.5em;
  margin: 0;
  padding: 0;

  &:hover {
    color: ${props => props.theme['white-base']};;
  }
`;

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Link to="/" navigationLink={true}>
            <Title>Ballcruncher</Title>
          </Link>

          <Navigation />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }

}

export default Header;
