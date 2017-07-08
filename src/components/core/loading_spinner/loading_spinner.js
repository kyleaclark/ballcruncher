/* Credit https://github.com/lukehaas/css-loaders for spinner css */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const SpinnerKeyframes = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const Spinner = styled.div`
  &,
  &:before,
  &:after {
    background: #404040;
    -webkit-animation: ${SpinnerKeyframes} 1s infinite ease-in-out;
    animation: ${SpinnerKeyframes} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  & {
    color: #404040;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
  }
  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }
`;

class LoadingSpinner extends React.Component {

  displayName: 'LoadingSpinner'

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Spinner>loading...</Spinner>
    );
  }

}

export default LoadingSpinner;
