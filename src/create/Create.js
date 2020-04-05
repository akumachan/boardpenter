import React from 'react';
import CommonButton from '../forms/CommonButton';
import './Create.css';
import {Link} from 'react-router-dom';
import RoleInputs from '../forms/RoleInputs'

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleList: [{roleName: 'test', roleNumber: '2'}]
    }
  }

  render() {
    return (
      <div className='create-container'>
        {this.state.roleList?.map(() => <RoleInputs />)}
        <RoleInputs />
        <CommonButton name='Add a Role'></CommonButton>
        <Link to='/created'><CommonButton name='Create a Room'></CommonButton></Link>
      </div>
    );
  }
}