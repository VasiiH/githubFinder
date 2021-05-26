import React, { Component } from "react";
import "./App.css";

class App extends Component {
   mt = () => 'method';
  render() {
    const name = 'vasi'
    const fn = () => 'function';
    return (
      <div className="App">
        <h1>hello {name} , function {fn()} , method {this.mt()}</h1>
      </div>
    );
  }
}

export default App;
