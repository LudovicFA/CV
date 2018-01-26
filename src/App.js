import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import Experience from './components/experience/experience';
import data from './data.json';

class App extends Component {
  render() {
      return (
      <div className="App">
        <Header identification={data.identification}> </Header>
        <Experience experiences={data.experiences}></Experience>
      </div>
    );
  }
}

export default App;
