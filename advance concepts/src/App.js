import React, { Component } from "react";
import Moivepage from "./Context/Moivepage";
import UserContext from "./Context/userContext";

class App extends Component {
  state = {
    currentUsers: {
      name: "gk",
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state.currentUsers}>
        <div>
          <Moivepage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
