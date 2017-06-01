'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  display: inline-block;
  margin-right: 5px;
  position: relative;
  width: 140px;
`;

const DropdownControl = styled.div`
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  color: #333;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`;

const DropdownMenu = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
`;

const DropdownMenuGroupTitle = styled.div`
  padding: 8px 10px;
  color: rgba(51, 51, 51, 1.2);
  font-weight: bold;
  text-transform: capitalize;
`;

const DropdownOption = styled.div`
  background-color: ${props => props.isSelected ? '#f2f9fc' : 'none'};
  box-sizing: border-box;
  color: ${props => props.isSelected ? '#333' : 'rgba(51, 51, 51, 0.8)'};
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  &:last-child {
    border-bottom-right-radius: 2px;
     border-bottom-left-radius: 2px;
  }

  &:hover {
    background-color: #f2f9fc;
    color: #333;
  }
`;

const DropdownArrow = styled.span`
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;
`;

const DropdownArrowOpen = styled(DropdownArrow)`
  border-color: transparent transparent #999;
  border-width: 0 5px 5px;
`;

const DropdownNoResults = styled.div`
  box-sizing: border-box;
  color: #ccc;
  cursor: default;
  display: block;
  padding: 8px 10px;
`;

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
    const isSelected = option == this.state.selected;

    return (
      <DropdownOption
        key={option.value}
        isSelected={isSelected}
        onMouseDown={this.setValue.bind(this, option)}
        onClick={this.setValue.bind(this, option)}>
        {option.label}
      </DropdownOption>
    );
  }

  buildMenu() {
    let ops = this.props.options.map((option) => {
      if (option.type == 'group') {
        let _options = option.items.map((item) => this.renderOption(item));

        return (
          <div key={option.name}>
            <DropdownMenuGroupTitle>{option.name}</DropdownMenuGroupTitle>
            {_options}
          </div>
        );
      } else {
        return this.renderOption(option);
      }
    })

    return ops.length ? ops : <DropdownNoResults>No options found</DropdownNoResults>;
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
    let menuEl;
    let dropdownEl;

    if (this.state.isOpen) {
      menuEl = <DropdownMenu>{this.buildMenu()}</DropdownMenu>;
      dropdownEl = <DropdownArrowOpen />;
    } else {
      menuEl = null;
      dropdownEl = <DropdownArrow />;
    }

    return (
      <DropdownWrapper>
        <DropdownControl
          onMouseDown={this.handleMouseDown.bind(this)}
          onTouchEnd={this.handleMouseDown.bind(this)}>
          <div>{this.state.selected.label}</div>
          {dropdownEl}
        </DropdownControl>
        {menuEl}
      </DropdownWrapper>
    );
  }

}

export default Dropdown;
