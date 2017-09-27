import React, { PropTypes, Component } from 'react';
import styled from 'styled-components'
import Link from '../link';

const NavContainer = styled.div`
  margin-top: 0px;
`;

class Navigation extends Component {

  render() {
    return (
      <NavContainer role="navigation">
        <Link navigationLink={true} to="/nba">NBA</Link>
        <Link navigationLink={true} to="/nfl">NFL</Link>
        <Link navigationLink={true} to="/fantasy-football">Fantasy Football</Link>
      </NavContainer>
    );
  }

}

export default Navigation;
