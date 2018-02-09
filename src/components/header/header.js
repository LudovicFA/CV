import React, { Component } from 'react';

import './header.css';

class Header extends React.Component {

  constructor(props) {
   super(props);
 }

  render() {
    return (

      <header id="header" className="shadow">
            <div id="intro" className="container">
              <h1 className="headerName text-center text-capitalize"> { this.props.identification.name} { this.props.identification.surname}</h1>
              <h4 className="headerFucntion text-center text-capitalize">{ this.props.identification.fonction}</h4>
            </div>
      </header>
    );
  }
}

export default Header;
