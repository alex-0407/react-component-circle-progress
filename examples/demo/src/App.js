import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CircleProgress from 'react-component-circle-progress';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Component Center</h1>
        </header>


        <h1>Demo of react-component-circle-progress</h1>
        <div style={{ width: '400px', margin: '20px auto' }}>
          <CircleProgress
            value={'A'}
          />
          <CircleProgress
            value={'B'}
          />
          <CircleProgress
            value={'C'}
          />
          <CircleProgress
            value={'D'}
          />
          <CircleProgress
            value={'E'}
          />
        </div>

      </div>
    );
  }
}

export default App;
