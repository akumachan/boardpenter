import React from 'react';
import './CommonButton.css';

export default class CommmonButton extends React.Component {
  render() {
    return (
      <span className="common-button" onClick={this.props.onClick}>{this.props.name}</span>
    );
  }
}