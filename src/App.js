import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import { allReducers } from './reducers/index';
const store = createStore(allReducers); // all data for the whole app


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Playing with Redux</h1>
        </header>
      </div>
    );
  }
}

export default App;
