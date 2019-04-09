import React, { Component } from 'react';
import './App.css';
import Greetings from './Greetings';
import Users from './components/users';
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Greetings /> */}
       <Users />
      </div>
    );
  }
}

export default App;
