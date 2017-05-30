import React, { PropTypes, Component } from 'react';
import s from './footer.css';
import Link from '../link';

class Footer extends Component {

  render() {
    return (
      <div className={s.footer}>
        <div className={s.footer__container}>
          <span className={s.footer__text}>© Ballcruncher 2017 &ndash; Sports Numbers &amp; Analysis</span>
        </div>
      </div>
    );
  }

}

export default Footer;
