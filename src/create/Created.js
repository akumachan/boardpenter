import React from 'react';
import CommonButton from '../forms/CommonButton';
import './Created.css';
export default class Created extends React.Component {
  render() {
    return (
      <div className='created-container'>
        <span>Room XXX has been created.</span>
        <CommonButton name='Join this Room'></CommonButton>
      </div>
    );
  }
}