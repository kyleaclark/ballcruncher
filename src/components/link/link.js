import React, { PropTypes } from 'react';
import styled from 'styled-components';
import history from '../../core/history';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const NavigationLink = styled.a`
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

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: null,
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    history.push(this.props.to);
  };

  render() {
    const { to, children, ...props } = this.props;

    if (this.props.navigationLink) {
      return (
        <NavigationLink href={to} {...props} onClick={this.handleClick}>
          {children}
        </NavigationLink>
      )
    } else {
      return <a href={to} {...props} onClick={this.handleClick}>{children}</a>;
    }
  }
}

export default Link;
