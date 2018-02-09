import React, { Component } from 'react';
import './experience.css';
import Details from './details';
import Competences from './competences';

class Experience extends React.Component {

  constructor(props) {
   super(props);

 }


  render() {
    var tabExpLeft = [];
    var tabExpRight = [];
    for (var i = 0; i < this.props.experiences.length; i++) {
      var dateelemnt;
      if(this.props.experiences[i].fin){
        dateelemnt = <div className="date">du { this.props.experiences[i].debut} au { this.props.experiences[i].fin}</div>
      }
      else {
        dateelemnt = <div className="date">{ this.props.experiences[i].debut}</div>
      }
      if(i % 2 === 0){
        tabExpLeft.push(
          <div className="experience">
            <div className="exp_header">
                <div className="societe">{ this.props.experiences[i].societe}</div>
                {dateelemnt}
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
          </div>
      );  
      }
      else{
        tabExpRight.push(
          <div className="experience">
            <div className="exp_header">
                {dateelemnt}
                <div className="societe">{ this.props.experiences[i].societe}</div>
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
          </div>
      );
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

export default Experience;
