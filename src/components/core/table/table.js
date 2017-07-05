'use strict';

import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
  color: #444;
  margin: 20px 0;
  width: 100%;
`;

const Th = styled.th`
  background-color: #efefef;
  border: 1px solid #fafafa;
  color: #404040;
  cursor: pointer;
  font-weight: 600;
  min-width: 40px;
  padding: 8px;
  padding-right: 15px;
  position: relative;
  text-align: left;

  &:hover {
    background-color: #eaeaea;
  }
`;

const Tr = styled.tr`
  background-color: ${props => props.theme[props.rowBgColor]};
`;

const Td = styled.td`
  border: 1px solid #fafafa;
  color: ${props => props.theme[props.rowTextColor]};
  min-width: 50px;
  padding: 8px;
`;

const SortIcon = styled.span`
  border-style: solid;
  content: ' ';
  height: 0;
  margin-top: ${Math.ceil(2.5)};
  position: absolute;
  right: 6px;
  top: 15px;
  width: 0;
`;

const SortAscendingIcon = styled(SortIcon)`
  border-color: transparent transparent #666;
  border-width: 0 6px 6px;
`;

const SortDescendingIcon = styled(SortIcon)`
  border-color: #666 transparent transparent;
  border-width: 6px 6px 0;
`;

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this._onSort(this.props.sortBy);
  }

  _onSort(sortBy) {
    this.setState({
      sortByProperty: sortBy.property,
      sortByOrder: sortBy.order
    });
  }

  _sortedData() {
    var sortedData,
        sortByProp = this.state.sortByProperty;

    sortedData = this.props.tableData.slice().sort(function (a, b) {
      return a[sortByProp] < b[sortByProp] ? -1 : a[sortByProp] > b[sortByProp] ? 1 : 0;
    });

    if (this.state.sortByOrder === 'descending') {
      sortedData.reverse();
    }

    return sortedData;
  }

  _buildGetKeys(keys) {
    return function (data) {
      return keys.map(function (key) {
        return data[key];
      });
    }
  }

  _renderBody() {
    let item,
        columns = this.props.columns,
        keys = this.props.keys,
        getKeys = this._buildGetKeys(keys),
        sortedData = this._sortedData(),
        rowClassNameValue = null;

    return sortedData.map((row, rowIndex) => {
      // TODO: Fix so default is the default and require key as a prop
      const rowBgColor = this.props.rowClassNameKey === 'default' ? 'white-base' : row.id.toLowerCase() + '-color';
      const rowTextColor = this.props.rowClassNameKey === 'default' ? 'gray-dark' : 'white-base';

      return (
        <Tr key={getKeys(row)} rowBgColor={rowBgColor}>
          {columns.map(function (col, index) {
            if (col.property === '_index') {
              item = rowIndex + 1;
            } else {
              item = col.formatter ? col.formatter(row[col.property]) : row[col.property];
            }

            return (
              <Td key={index} rowTextColor={rowTextColor}>
                {item}
              </Td>);
          })}
        </Tr>);
    });
  }

  _buildHeaderAttrs(col) {
    var sortOrder = this.state.sortByProperty === col.property ? this.state.sortByOrder : 'none',
        nextSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';

    return {
      'onClick': this._onSort.bind(this, { property: col.property, order: nextSortOrder }),
      'onMouseDown'(ev) { ev.preventDefault(); },
      'data-sort': sortOrder
    };
  }

  _renderSortIcon(sortOrder) {
    if (sortOrder === 'ascending') {
      return <SortAscendingIcon />
    } else if (sortOrder === 'descending') {
      return <SortDescendingIcon />
    }
  }

  _renderHeading() {
    var sortAttrs,
        sortOrder,
        columns = this.props.columns,
        self = this;

    return columns.map((col, index) => {
      if (col.sortable) {
        sortAttrs = self._buildHeaderAttrs(col);
        sortOrder = sortAttrs['data-sort'];
      } else {
        sortAttrs = {};
      }

      return (
        <Th
          key={col.label || col.property}
          title={col.title}
          {...sortAttrs}>
          {col.label && <span>{col.label}</span>}
          {col.sortable && this._renderSortIcon(sortOrder)}
        </Th>
      );
    });
  }

  render() {
    var columns = this.props.columns,
        keys = this.props.keys,
        buildRowOptions = this.props.buildRowOptions,
        sortBy = this.state.sortBy;

    return (
      <TableContainer>
        <thead>
          <tr>
            {this._renderHeading()}
          </tr>
        </thead>
        <tbody>
          {this._renderBody()}
        </tbody>
      </TableContainer>
    );
  }
}

Table.displayName = 'Table';

Table.defaultProps = {
  className: 'table'
};

export default Table;
