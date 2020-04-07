import React from 'react';
import './Joined.css'

export default class Joined extends React.Component {
  render() {
    return (
      <div id='joined-container'>
        <span>You have joined the Room XXX　</span>
        <span>and your role is YYY.</span>
      </div>
    );
  }
}