import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'navigation')} role="navigation">
        <a className="navigiation__link" href="/" onClick={Link.handleClick}>Home</a>
        <span className="navigiation__spacer"> | </span>
        <a className="navigiation__link" href="/nfl" onClick={Link.handleClick}>NFL</a>
      </div>
    );
  }

}

export default Navigation;
