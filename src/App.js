import React, { Component } from "react";
import "./App.css";
import Navbar from './componenets/layouts/Navbar'
import UserItems from './componenets/users/UserItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <UserItems/>
      </div>
    );
  }
}

export default App; 
