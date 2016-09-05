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

          <div className={s.header__title_container}>
            <h1 className={s.header__title}>Ballcruncher</h1>
            <h3 className={s.header__subtitle}>stat crunching &amp; sports musings</h3>
          </div>

          <Navigation className={s.header__nav} />
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Header);
