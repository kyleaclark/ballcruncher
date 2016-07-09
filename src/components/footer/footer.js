/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './footer.css';
import Link from '../link';

class Footer extends Component {

  render() {
    return (
      <div className={s.footer}>
        <div className={s.footer__container}>
          <span className={s.footer__text}>© Ballcruncher 2016</span>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Footer);
