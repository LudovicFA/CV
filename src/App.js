import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import Experiences from './components/experience/experiences';
import Ressources from './components/ressources/ressources';
import About from './components/about/about';
import data from './data.json';

class App extends Component {
  render() {
      return (
      <div className="App">
        <Header identification={data.identification}> </Header>
        <Router>
          <div>
            <ul className='navigation'>
              <li><Link to="/">Experiences</Link></li>
              <li><Link to="/ressources">Ressources</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            
            <Route exact path="/"  render={() => (
              <section id="section_timeline">
                <Experiences experiences={data.experiences}></Experiences>
              </section>
            )}/>
            <Route path="/ressources" component={Ressources}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
