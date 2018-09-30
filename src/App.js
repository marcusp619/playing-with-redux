import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import { Provider } from 'react-redux';
import { allReducers } from './reducers/index';
import UserList from './containers/user-list';

const store = createStore(allReducers); // all data for the whole app


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Playing with Redux</h1>
          </header>
          <h2>Username List:</h2>
          <UserList />
          <hr /> 
          <h2>User Details</h2>
        </div>
      </Provider>
    );
  }
}

export default App;
