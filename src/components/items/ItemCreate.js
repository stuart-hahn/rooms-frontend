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

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className='ui form'>
        <div className='field'>
          <input
            onChange={this.onChangeInput}
            name='item'
            type='text'
            placeholder='Add item...'
          />
        </div>
        <div className='field'>
          <input
            onChange={this.onChangeInput}
            name='description'
            type='text'
            placeholder='Add description...'
          />
        </div>
        <button type='submit' className='ui green button'>
          Add Item
        </button>
      </form>
    );
  }
}

export default connect(null, { createItem })(ItemCreate);
