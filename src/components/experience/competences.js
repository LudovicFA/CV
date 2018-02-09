import React, { Component } from 'react';

class Competences extends React.Component {

  constructor(props) {
   super(props);

 }

  render() {
    var tabDetails = [];
    for (var i = 0; i < this.props.competences.length; i++) {
      tabDetails.push(
          <span className={(this.props.competences[i].important ? 'overline' : 'normal')}>#{ this.props.competences[i].content }</span> 
      );
    }


    return (
      <div className="list_competences">
        { tabDetails }
      </div>
    );
  }
}

export default Competences;
