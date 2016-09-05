import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './navigation.css';
import Link from '../link';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={s.navigation} role="navigation">
        <Link className={s.navigiation__link} to="/">Home</Link>
        <span className={s.navigiation__spacer}> | </span>
        <Link className={s.navigiation__link} to="/nfl">NFL</Link>
        <span className={s.navigiation__spacer}> | </span>
        <Link className={s.navigiation__link} to="/fantasy-football">FFB</Link>
      </div>
    );
  }

}

export default withStyles(s)(Navigation);
