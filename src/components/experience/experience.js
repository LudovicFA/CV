import React, { Component } from 'react';
import './experience.css';
import Details from './details';
import Competences from './competences';

class Experience extends React.Component {

  constructor(props) {
   super(props);

 }


  render() {
    var tabExp = [];
    for (var i = 0; i < this.props.experiences.length; i++) {
      tabExp.push(
        <div className="experience">
          <div className="exp_header">
            <span className="societe">{ this.props.experiences[i].societe}</span>
            <span className="date">{ this.props.experiences[i].debut} a { this.props.experiences[i].fin} </span>
          </div>
          <div className="exp_projet">
            <span className="projet">{ this.props.experiences[i].projet}</span>
            <span className="introduction">{ this.props.experiences[i].introduction}</span>
          </div>
          <div className="exp_details">
            <Details details={this.props.experiences[i].details} />
          </div>
          <div className="exp_competences">
            <Competences competences={this.props.experiences[i].competences} />
          </div>
          <div className="dot"></div>
        </div>
      );
    }

    return (
      <div className="list_experiences">
        {tabExp}
      </div>
    );
  }
}

export default Experience;
