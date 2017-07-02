import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';
const ROOT_URL = process.env.REACT_APP_URL;
console.log("working url", ROOT_URL);

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
