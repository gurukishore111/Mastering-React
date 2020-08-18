import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./Tablebody";

const Table = (props) => {
  const { onSort, sortColumns, data, columns } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumns={sortColumns}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
