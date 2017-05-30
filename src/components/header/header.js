import React, { Component } from 'react';
import styled from 'styled-components';
import s from './header.css';
import Link from '../link';
import Navigation from '../navigation';

const HeaderWrapper = styled.div`
  background-color: #bbb;
  border-bottom: 1px solid #eee;
  color: #bbb;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  max-width: 1000px;
`;

const Title = styled.h1`
  color: #efefef;
  display: block;
  font-size: 1.5em;
  margin: 0;
  padding: 0;

  &:hover {
    color: #fff;
  }
`;

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Link className={s.navigiation__link} to="/">
            <Title>Ballcruncher</Title>
          </Link>

          <Navigation className={s.header__nav} />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }

}

export default Header;
