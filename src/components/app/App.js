import React, { Component } from 'react';
import logo from '../../assets/img/klase_onda.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title text-primary">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
