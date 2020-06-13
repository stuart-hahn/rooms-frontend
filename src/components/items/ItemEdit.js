import React from "react";
import { connect } from "react-redux";

import { editItem } from "../../actions/itemsActions";
import { Redirect } from "react-router-dom";

class ItemEdit extends React.Component {
  state = {
    name: this.props.location.state.item.attributes.name,
    description: this.props.location.state.item.attributes.description,
    packed: this.props.location.state.item.attributes.packed,
    id: this.props.location.state.item.id,
  };

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const currentUser = this.props.location.state.currentUser;
    this.props.editItem(this.state, currentUser.data.id);
  };

  onChangeCheckbox = () => {
    this.setState({
      packed: !this.state.packed,
    });
  };

  render() {
    const { item } = this.props.location.state;
    if (!item) {
      return <Redirect to='/' />;
    }
    return (
      <form onSubmit={this.onSubmitForm} className='ui form'>
        <div className='field'>
          <input
            onChange={this.onChangeInput}
            name='item'
            type='text'
            placeholder='Add item...'
            value={this.state.name}
          />
        </div>
        <div className='field'>
          <input
            onChange={this.onChangeInput}
            name='description'
            type='text'
            placeholder='Add description...'
            value={this.state.description}
          />
        </div>
        <div className='field'>
          <div className='ui toggle checkbox'>
            <input
              onChange={this.onChangeCheckbox}
              type='checkbox'
              name='packed'
              value={this.state.packed}
              checked={this.state.packed}
            />
            <label>Already Packed?</label>
          </div>
        </div>
        <button type='submit' className='ui green button'>
          Submit Changes
        </button>
      </form>
    );
  }
}

export default connect(null, { editItem })(ItemEdit);
