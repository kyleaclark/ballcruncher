import React, { PropTypes, Component } from 'react';
import styled from 'styled-components'
import classNames from 'classnames';
import s from './navigation.css';
import Link from '../link';

const NavContainer = styled.div`
  font-family: var(--font-family-alt);
  margin-top: 0px;
`

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <NavContainer role="navigation">
        <Link className={s.navigiation__link} to="/nfl">NFL</Link>
        <span className={s.navigiation__spacer}></span>
        <Link className={s.navigiation__link} to="/fantasy-football">Fantasy Football</Link>
      </NavContainer>
    );
  }

}

export default Navigation;
