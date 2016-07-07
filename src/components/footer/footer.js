/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './footer.css';
import Link from '../link';

class Footer extends Component {

  _render() {
    return (
      <div className={s.footer}>
        <div className={s.footer__container}>
          <span className={s.footer__text}>© Ballcruncher</span>
          <span className={s.footer__spacer}>·</span>
          <a className={s.footer__link} href="/" onClick={Link.handleClick}>Home</a>
          <span className={s.footer__spacer}>·</span>
          <a className={s.footer__link} href="/privacy" onClick={Link.handleClick}>Privacy</a>
          <span className={s.footer__spacer}>·</span>
          <a className={s.footer__link} href="/not-found" onClick={Link.handleClick}>Not Found</a>
          <span className={s.footer__spacer}> | </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={s.footer}>
        <div className={s.footer__container}>
          <span className={s.footer__text}>© Ballcruncher 2016, created by Kyle Clark</span>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Footer);
