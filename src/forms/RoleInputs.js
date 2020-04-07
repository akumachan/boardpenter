import React from 'react';
import './RoleInputs.css';

export default class RoleInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      number: this.props.number
    }
  }

  render() {
    return (
      <div className='role-inputs'>
        <input
          type="text"
          className='common-input role-name'
          placeholder='Role Name'
          defaultValue={this.state.name}
          onChange={(e) => this.props.onTextChange(this.props.id, e.target.value, this.props.number)}
        />
        <select
          className='common-input role-number'
          defaultValue={this.state.number}
          onChange={(e) => this.props.onTextChange(this.props.id, this.state.name, e.target.value)}>
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
        <span onClick={() => this.props.onDeleteClick(this.props.id)}><i className='material-icons'>cancel</i></span>
      </div>
    );
  }
}