/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <span className="Header-brandTxt">Ballcruncher<sub className="beta-text">(beta)</sub></span>
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <h3 className="Header-bannerTitle">ball don't lie</h3>
            <p className="Header-bannerDesc">sports analytics &amp; musings</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
