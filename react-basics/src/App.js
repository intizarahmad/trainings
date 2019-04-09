import React, { Component } from 'react';
import './App.css';
import Greetings from './Greetings';
import Users from './components/users/users';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Greetings /> */}
       <Header />
       <Users />
      </div>
    );
  }
}

export default App;
