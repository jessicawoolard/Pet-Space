import React, { Component } from 'react';
import logo from '../logo.svg';
import './../App.css';
import UpdateForm from "./../Components/UpdateForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UpdateForm/>
      </div>
    );
  }
}

export default App;
