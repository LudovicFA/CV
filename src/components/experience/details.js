import React, { Component } from 'react';

class Details extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
      isHidden: true
    }
 }
 toggleHidden () {
     this.setState({
       isHidden: !this.state.isHidden
     })
   }


  render() {
    var tabDetails = [];
    var content = "";
    for (var i = 0; i < this.props.details.length; i++) {
      tabDetails.push(
          <li className={(this.props.details[i].important ? 'overline' : 'normal')}>{ this.props.details[i].content }</li>
      );
    }

    if(!this.state.isHidden){
      content = <ul className="list_details">
        {tabDetails}
      </ul>;
    }

    return (
      <div>
        <a href="#" onClick={this.toggleHidden.bind(this)}> More ... </a>
        { content }
      </div>
    );
  }
}

export default Details;
