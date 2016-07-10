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
        <a className={s.navigiation__link} href="/" onClick={Link.handleClick}>Home</a>
      </div>
    );
  }

}

export default withStyles(s)(Navigation);
