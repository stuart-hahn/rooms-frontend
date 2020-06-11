import React from "react";
import { connect } from "react-redux";

import { createItem } from "../../actions/itemsActions";

class ItemCreate extends React.Component {
  state = {
    item: "",
    description: "",
    packed: false,
  };

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.createItem(this.state, this.props.user_id);
  };

  onChangeCheckbox = () => {
    this.setState({
      packed: !this.state.packed,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className='ui form'>
        <div className='field'>
          <input
            onChange={this.onChangeInput}
            name='item'
            type='text'
            placeholder='Add item...'
            value={this.state.item}
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
            />
            <label>Already Packed?</label>
          </div>
        </div>
        <button type='submit' className='ui green button'>
          Add Item
        </button>
      </form>
    );
  }
}

export default connect(null, { createItem })(ItemCreate);
