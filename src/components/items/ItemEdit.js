import React from "react";
import { connect } from "react-redux";

import { editItem } from "../../actions/itemsActions";
import { Redirect } from "react-router-dom";

class ItemEdit extends React.Component {
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
    this.props.editItem(this.state, this.props.user_id);
  };

  onChangeCheckbox = () => {
    this.setState({
      packed: !this.state.packed,
    });
  };

  render() {
    const selectedItem = this.props.selectedItem;
    if (!selectedItem) {
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
            value={selectedItem.attributes.name}
          />
        </div>
        <div className='field'>
          <input
            onChange={this.onChangeInput}
            name='description'
            type='text'
            placeholder='Add description...'
            value={selectedItem.attributes.description}
          />
        </div>
        <div className='field'>
          <div className='ui toggle checkbox'>
            <input
              onChange={this.onChangeCheckbox}
              type='checkbox'
              name='packed'
              value={selectedItem.attributes.packed}
              checked={selectedItem.attributes.packed}
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

const mapStateToProps = ({ itemsData }) => ({
  selectedItem: itemsData.selectedItem,
});
export default connect(mapStateToProps, { editItem })(ItemEdit);
