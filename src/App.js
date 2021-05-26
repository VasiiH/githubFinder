import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "vasi";
    const loading = false;
    const showName = true;
    return (
      <div className="App">
        <h1>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Hello {showName ? name : null}</h2>
          )}
        </h1>
      </div>
    );
  }
}

export default App;
