import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Moives extends Component {
  render() {
    return (
      <div>
        <h5>Moives{this.props.showTooltip && <div>Some ToolTip</div>}</h5>
      </div>
    );
  }
}

export default withTooltip(Moives);
