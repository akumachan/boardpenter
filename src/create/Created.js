import React from 'react';
import CommonButton from '../forms/CommonButton';
import './Created.css';
import {Link} from 'react-router-dom';

export default class Created extends React.Component {
  render() {
    return (
      <div id='created-container'>
        <span>Room XXX has been created.</span>
        <Link to='/joined'><CommonButton name='Join this Room'></CommonButton></Link>
      </div>
    );
  }
}