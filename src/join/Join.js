import React from 'react';
import CommonInput from '../forms/CommonInput';
import './Join.css';
import CommmonButton from '../forms/CommonButton';

export default class Join extends React.Component {
  render() {
    return (
      <div id='join-container'>
        <CommonInput />
        <CommmonButton name='Join the Room'/>
      </div>
    );
  }
}