'use strict';

import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import s from './table.css';

const Th = styled.th`
  background-color: #efefef;
  border: 1px solid #fafafa;
  color: #404040;
  cursor: pointer;
  font-weight: 600;
  min-width: 40px;
  padding: 8px;
  padding-right: 15px
  position: relative;
  text-align: left;

  &:hover {
    background-color: #eaeaea;
  }
`

const Td = styled.td`
  border: 1px solid #fafafa;
  min-width: 50px;
  padding: 8px;
`

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
      if (this.props.rowClassNameKey === 'default') {
        rowClassNameValue = rowIndex % 2 === 0 ? 'table__even-row' : 'table__odd-row'
      } else {
        rowClassNameValue = row.id.toLowerCase()
      }

      return (
        <tr key={getKeys(row)} className={s[rowClassNameValue]}>
          {columns.map(function (col, index) {
            if (col.property === '_index') {
              item = rowIndex + 1;
            } else {
              item = col.formatter ? col.formatter(row[col.property]) : row[col.property];
            }

            return (
              <Td key={index} className={s[col.className]}>
                {item}
              </Td>);
          })}
        </tr>);
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

  _renderHeading() {
    var sortAttrs,
        sortOrder,
        columns = this.props.columns,
        self = this;

    return columns.map(function (col, index) {
      if (col.sortable) {
        sortAttrs = self._buildHeaderAttrs(col);
        sortOrder = sortAttrs['data-sort'];
      } else {
        sortAttrs = {};
      }

      let sortOrderClass = cx(
        s.table__sort_icon,
        s[`table__sort_${sortOrder}`]
      );

      return (
        <Th
          key={col.label || col.property}
          title={col.title}
          {...sortAttrs}>
          {col.label && <span>{col.label}</span>}
          {col.sortable && <span className={sortOrderClass} />}
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
      <table className={s[this.props.className]}>
        <thead>
          <tr>
            {this._renderHeading()}
          </tr>
        </thead>
        <tbody>
          {this._renderBody()}
        </tbody>
      </table>
    );
  }
}

Table.displayName = 'Table';

Table.defaultProps = {
  className: 'table'
};

export default Table;
