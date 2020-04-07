import React from 'react';
import CommonInput from '../forms/CommonInput';
import './Join.css';
import CommmonButton from '../forms/CommonButton';
import {Link} from 'react-router-dom';

export default class Join extends React.Component {
  render() {
    return (
      <div id='join-container'>
        <CommonInput />
        <Link to='/joined'><CommmonButton name='Join the Room'/></Link>
      </div>
    );
  }
}