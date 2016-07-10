'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './dropdown.css';

class Dropdown extends React.Component {

  displayName: 'Dropdown'

  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || { label: props.placeholder || 'Select...', value: '' },
      isOpen: false
    }
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({selected: newProps.value});
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleMouseDown(event) {
    if (event.type == 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setValue(option) {
    let newState = {
      selected: option,
      isOpen: false
    }
    this.fireChangeEvent(newState);
    this.setState(newState);
  }

  fireChangeEvent(newState) {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  }

  renderOption (option) {
    let optionClass = cx({
      [s.dropdown__option]: true,
      [s.is_selected]: option == this.state.selected
    });

    return (
      <div key={option.value} className={optionClass} onMouseDown={this.setValue.bind(this, option)} onClick={this.setValue.bind(this, option)}>
        {option.label}
      </div>
    );
  }

  buildMenu() {
    let ops = this.props.options.map((option) => {
      if (option.type == 'group') {
        let groupTitle = (<div className={s.title}>{option.name}</div>);
        let _options = option.items.map((item) => this.renderOption(item));

        return (
          <div className={s.group} key={option.name}>
            {groupTitle}
            {_options}
          </div>
        );
      } else {
        return this.renderOption(option);
      }
    })

    return ops.length ? ops : <div className={s.dropdown__noresults}>No options found</div>;
  }

  handleDocumentClick(event) {
    if(this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        this.setState({isOpen:false});
      }
    }
  }

  render() {
    const { controlClassName, menuClassName } = this.props;
    let menu = this.state.isOpen ? <div className={s[menuClassName]}>{this.buildMenu()}</div> : null;

    let dropdownClass = cx({
      [s.dropdown]: true,
      [s.is_open]: this.state.isOpen
    });

    return (
      <div className={dropdownClass}>
        <div className={s[controlClassName]} onMouseDown={this.handleMouseDown.bind(this)} onTouchEnd={this.handleMouseDown.bind(this)}>
          <div className={s.placeholder}>{this.state.selected.label}</div>
          <span className={s.dropdown__arrow} />
        </div>
        {menu}
      </div>
    );
  }

}

Dropdown.defaultProps = { controlClassName: 'dropdown__control', menuClassName: 'dropdown__menu'};

export default withStyles(s)(Dropdown);
