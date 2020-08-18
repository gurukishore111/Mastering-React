import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoiveTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (moive) => <Link to={`moives/${moive._id}`}>{moive.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (moive) => (
        <Like liked={moive.liked} onClick={() => this.props.onLike(moive)} />
      ),
    },
    {
      key: "Delete",
      content: (moive) => (
        <button
          onClick={() => this.props.onDelete(moive)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { moives, sortColumns, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={moives}
        sortColumns={sortColumns}
        onSort={onSort}
      />
    );
  }
}

export default MoiveTable;
