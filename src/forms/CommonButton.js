import React from 'react';
import './CommonButton.css';

export default class CommmonButton extends React.Component {
  render() {
    return (
      <span className="common-button">{this.props.name}</span>
    );
  }
}