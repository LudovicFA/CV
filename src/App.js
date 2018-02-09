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

        <section id="about" className="section">

            <div id="intro-div" className="card">
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et tortor ac tincidunt.
                        In euismod iaculis lobortis. Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum
                        venenatis pharetra mi, ut vestibulum elit ultricies a. Vestibulum at mollis ex, ac consectetur
                        massa. Donec nunc dui, laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus.
                        Pellentesque tempus suscipit velit sit amet bibendum.
                    </p>

                    <div className="row">
                            <a href="#">Download CV</a>
                            <a href="#">Contact Me</a>
                    </div>
              </div>
      </section>

      <section id="section_timeline">
        <Experience experiences={data.experiences}></Experience>
      </section>
    </div>
    );
  }
}

export default App;
