/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../link';
import Navigation from '../navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="header__container">
          <a className="header__brand" href="/" onClick={Link.handleClick}>
            <span className="header__brand--txt">Ballcruncher<sub className="beta-text">(beta)</sub></span>
          </a>
          <Navigation className="header__nav" />
          <div className="header__banner">
            <h3 className="header__banner--title">ball don't lie test</h3>
            <p className="header__banner--desc">sports analytics &amp; musings</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
