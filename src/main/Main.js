import React from 'react';
import './Main.css';
import CommonButton from '../forms/CommonButton'
import {Link} from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Link to='/create'><CommonButton name='Create a Room'></CommonButton></Link>
        <Link to='/join'><CommonButton name='Join the Room'></CommonButton></Link>
      </div>
    );
  }
}