import React from "react";
import { connect } from "react-redux";

import { createItem } from "../../actions/itemsActions";

class ItemCreate extends React.Component {
  state = {
    item: "",
  };

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.createItem(this.state.item, this.props.user_id);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className='ui form'>
        <input
          onChange={this.onChangeInput}
          name='item'
          type='text'
          placeholder='Add item...'
        />
      </form>
    );
  }
}

export default connect(null, { createItem })(ItemCreate);
