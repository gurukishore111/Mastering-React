import React, { Component } from "react";

class TableHeader extends Component {
  rasieSort = (path) => {
    const sortColumns = { ...this.props.sortColumns };
    if (sortColumns.path === path)
      sortColumns.order = sortColumns.order === "asc" ? "desc" : "asc";
    else {
      sortColumns.path = path;
      sortColumns.order = "asc";
    }
    this.props.onSort(sortColumns);
  };
  renderSortIcon = (column) => {
    const { sortColumns } = this.props;
    if (column.path !== sortColumns.path) return null;
    if (sortColumns.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.rasieSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
