import React, { Component } from 'react';
import styled from 'styled-components'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './header.css';
import Link from '../link';
import Navigation from '../navigation';

const Title = styled.h1`
  color: #efefef;
  display: block;
  font-size: 1.5em;
  margin: 0;
  padding: 0;

  &:hover {
    color: #fff;
  }
`

class Header extends Component {

  render() {
    return (
      <div className={s.header}>
        <div className={s.header__container}>
          <Link className={s.navigiation__link} to="/"><Title>Ballcruncher</Title></Link>

          <Navigation className={s.header__nav} />
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Header);
