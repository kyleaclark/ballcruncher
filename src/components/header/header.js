import React, { Component } from 'react';
import styled from 'styled-components'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './header.css';
import Link from '../link';
import Navigation from '../navigation';

const Title = styled.h1`

`

class Header extends Component {

  render() {
    return (
      <div className={s.header}>
        <div className={s.header__container}>
        
          <Link className={s.navigiation__link} to="/">
            <h1 className={s.header__title}>Ballcruncher</h1>
          </Link>

          <Navigation className={s.header__nav} />
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Header);
