import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './header.css';
import Link from '../link';
import Navigation from '../navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.header}>
        <div className={s.header__container}>
          <h1 className={s.header__title}>Ballcruncher</h1>
          <Navigation className={s.header__nav} />
          <div className={s.header__banner}>
            <h3 className={s.header__banner__title}>ballcruncher don&#39;t lie</h3>
            <p className={s.header__banner__desc}>sports analytics &amp; musings</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Header);
