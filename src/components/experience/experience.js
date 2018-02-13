import React, { Component } from 'react';
import './experience.css';
import Details from './details';
import Competences from './competences';
import Popup from '../popup/popup';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showContent: false 
    };
  }

  onClick = () =>  {
    this.setState({
      showContent: !this.state.showContent
    })
  }


  render() {
    var dateelemnt;
    if(this.props.experience.fin){
      dateelemnt = <span className="date">du { this.props.experience.debut} au { this.props.experience.fin}</span>
    }
    else {
      dateelemnt = <span className="date">{ this.props.experience.debut}</span>
    }
    const exp = <div className="experience" >
                  <div className="experience_content">
                      <h1>{ this.props.experience.projet}</h1>
                      <div className="subtitle">
                        { this.props.experience.societe} - {dateelemnt}
                      </div>
                      <p>
                        { this.props.experience.introduction}
                      </p>
                      { this.state.showContent ? <Details details={this.props.experience.details} /> : null }
                    <div className="experience_details">
                      <div className="experience_details_inner">
                        <Competences competences={this.props.experience.competences} important={true} />
                      </div>
                      <a className="button"  onClick={this.onClick}>Détails</a>
                    </div>
                  </div>
                </div>
    return (exp);
  }
}

export default Experience;
