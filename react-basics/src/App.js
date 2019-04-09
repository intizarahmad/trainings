import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';
import Users from './components/users/users';
import Header from './components/header/header';
import Home from './components/home/home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/about" render={()=><h5>This is about us page </h5>} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
