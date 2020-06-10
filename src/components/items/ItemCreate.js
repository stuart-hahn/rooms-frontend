import React from "react";

class ItemCreate extends React.Component {
  state = {};
  render() {
    return (
      <form className='ui form'>
        <input type='text' placeholder='Add item...' />
      </form>
    );
  }
}

export default ItemCreate;
