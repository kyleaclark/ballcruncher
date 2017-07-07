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
  color: ${props => props.theme['brand-color']};
  display: inline-block;
  padding: 0 20px 3px 0;
  padding-top: 0;
  text-decoration: none;
  font-size: 1.125em;

  &:active,
  &:visited {
    color: ${props => props.theme['brand-color']};
  }

  &:hover {
    color: ${props => props.theme['gray-lightest']};
  }
`;

const TextLink = styled.a`
  color: ${props => props.theme['brand-color']};
  font-size: 1em;
  text-decoration: none;

  &:active,
  &:visited {
    color: ${props => props.theme['brand-color']};
  }

  &:hover {
    color: ${props => props.theme['gray']};
  }
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
    let handleClick = this.handleClick;

    if (this.props.external) {
      handleClick = null;
    }

    /* TODO: refactor to handle multiple link style types */
    if (this.props.navigationLink) {
      return (
        <NavigationLink href={to} {...props} onClick={handleClick}>
          {children}
        </NavigationLink>
      )
    } else if (this.props.type === 'text') {
      return (
        <TextLink href={to} {...props} onClick={handleClick}>
          {children}
        </TextLink>
      )
    } else {
      return <a href={to} {...props} onClick={handleClick}>{children}</a>;
    }
  }
}

export default Link;
