/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './footer.css';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../link';

@withViewport
@withStyles(styles)
class Footer extends Component {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  _render() {
    // This is just an example how one can render CSS
    const { width, height } = this.props.viewport;
    // this.renderCss(`.Footer__viewport:after {content:' ${width}x${height}';}`);

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
