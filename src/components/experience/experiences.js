import React, { Component } from 'react';
import './experience.css';
import Details from './details';
import Competences from './competences';
import Experience from './experience';
import Popup from '../popup/popup';

class Experiences extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var tabExpLeft = [];
    var tabExpRight = [];
    for (var i = 0; i < this.props.experiences.length; i++) {
      const exp = <Experience experience={this.props.experiences[i]} />
      if(i % 2 === 0){
        tabExpLeft.push(exp);  
      }
      else{
        tabExpRight.push(exp);
      }
    }

    return (
      <div className="timeline">
          <div className="timeline_left">{tabExpLeft}</div>
          <div className="timeline_right">{tabExpRight}</div>
      </div>
    );
  }
}

export default Experiences;
