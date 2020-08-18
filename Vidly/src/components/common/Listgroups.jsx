import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    const {
      textProperty,
      valueProperty,
      onItemSelect,
      selectedItem,
    } = this.props;
    return (
      <ul className="list-group">
        {this.props.items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
