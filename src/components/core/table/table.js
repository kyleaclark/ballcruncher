'use strict';

import React from 'react';
import styles from './table.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)

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

  _renderBody(tableData, columns, keys) {
    var item,
        columns = this.props.columns,
        keys = this.props.keys,
        getKeys = this._buildGetKeys(keys),
        sortedData = this._sortedData();

    return sortedData.map(function (row) {
      return (
        <tr key={getKeys(row)}>
          {columns.map(function (col, index) {
            item = col.formatter ? col.formatter(row[col.property]) : row[col.property];

            return (
              <td key={index}>
                {item}
              </td>);
          })}
        </tr>);
    });
  }

  _buildHeaderAttrs(col) {
    var sortOrder = this.sortByProperty === col.property ? this.sortByOrder : 'none',
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
      sortAttrs = self._buildHeaderAttrs(col);
      sortOrder = sortAttrs['data-sort'];

      return (
        <th
          key={col.label}
          title={col.title}
          {...sortAttrs}>
          <span>{col.label}</span>
          <span className={`sort-icon sort-${sortOrder}`} />
        </th>
      );
    });
  }

  render() {
    var columns = this.props.columns,
        keys = this.props.keys,
        buildRowOptions = this.props.buildRowOptions,
        sortBy = this.state.sortBy;

    return (
      <table className={this.props.className}>
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
  className: 'table-component'
};

export default Table;
