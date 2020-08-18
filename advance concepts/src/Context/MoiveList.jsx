import React, { Component } from "react";
import UserContext from "./userContext";
import MoiveRow from "./MoiveRow";

class MoiveList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            MoiveList {userContext.name} <MoiveRow />{" "}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MoiveList;
