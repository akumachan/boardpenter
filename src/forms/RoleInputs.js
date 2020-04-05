import React from 'react';
import './RoleInputs.css';

export default class RoleInputs extends React.Component {
  render() {
    return (
      <div className='role-inputs'>
        <input type="text" className='common-input role-name' placeholder='Role Name'></input>
        <select className='common-input role-number'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
        <span><i className='material-icons'>clear</i></span>
      </div>
    );
  }
}