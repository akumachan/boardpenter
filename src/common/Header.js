import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-inner">
          <Link to='/'><span>Boardpenter</span></Link>
        </div>
      </header>
    );
  }
}