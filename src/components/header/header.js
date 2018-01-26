import React, { Component } from 'react';
import './header.css';

class Header extends React.Component {

  constructor(props) {
   super(props);
 }

  render() {
    return (
      <header className="App-header">
        <div>
          <div className="headerName"> { this.props.identification.name}</div>
          <div className="headerSurname"> { this.props.identification.surname}</div>
        </div>
        <div className="headerAge"> { this.props.identification.birth}</div>
        <div className="headerCity"> { this.props.identification.city}</div>
      </header>
    );
  }
}

export default Header;
