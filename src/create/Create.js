import React from 'react';
import CommonButton from '../forms/CommonButton';
import './Create.css';
import {Link} from 'react-router-dom';
import RoleInputs from '../forms/RoleInputs'

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleList: [
        {
          id: Math.random().toString(32).substring(2),
          name: '',
          number: '1'
        }
      ]
    }
  }

  addRole = () => {
    const roleList = [...this.state.roleList];
    roleList.push({id: Math.random().toString(32).substring(2), name: '', number: 1});
    this.setState({roleList: roleList});
  }

  updateRole = (id, name, number) => {
    const roleList = [...this.state.roleList];
    roleList.map((v, i) => { if (i === id) {v.name = name; v.number = number;} return v; });
    this.setState({roleList: roleList});
  }

  deleteRole = (id) => {
    console.log(id)
    const newList = this.state.roleList.filter((v) => v.id !== id);
    this.setState({roleList: newList});
  }

  render() {
    return (
      <div className='create-container'>
        {this.state.roleList?.map((v, i) =>
          <RoleInputs
            key={v.id}
            id={v.id}
            name={v.name}
            number={v.number}
            onTextChange={this.updateRole}
            onDeleteClick={this.deleteRole}
          />)}
        <CommonButton
          name='Add a Role'
          onClick={this.addRole}
        />
        <Link to='/created'><CommonButton name='Create a Room' onClick={() => console.log(this.state)}></CommonButton></Link>
      </div>
    );
  }
}