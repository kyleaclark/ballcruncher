/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './footer.css';
import Link from '../link';

class Footer extends Component {

  _render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <span className="footer__text">© Ballcruncher</span>
          <span className="footer__spacer">·</span>
          <a className="footer__link" href="/" onClick={Link.handleClick}>Home</a>
          <span className="footer__spacer">·</span>
          <a className="footer__link" href="/privacy" onClick={Link.handleClick}>Privacy</a>
          <span className="footer__spacer">·</span>
          <a className="footer__link" href="/not-found" onClick={Link.handleClick}>Not Found</a>
          <span className="footer__spacer"> | </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <span className="footer__text">© Ballcruncher<sub className="beta-text">(beta)</sub> 2015, founded by Kyle Clark</span>
        </div>
      </div>
    );
  }

}

export default Footer;
