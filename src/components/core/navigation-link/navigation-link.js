import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../../link';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 20px 3px 0;
  padding-top: 0;
  text-decoration: none;
  font-size: 1.125em;

  &,
  &:active,
  &:visited {
    color: ${props => props.theme['brand-color']};
  };

  &:hover {
    color: ${props => props.theme['gray-lightest']};
  };
`;

class NavigationLink extends Component {

  render() {
    return (
      <StyledLink {...this.props} />
    );
  }

}

export default NavigationLink;
