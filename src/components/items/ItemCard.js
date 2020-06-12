import React from "react";

const Item = ({ item }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>{item.attributes.name}</div>
        <div className='description'>{item.attributes.description}</div>
      </div>
      <div className='extra content'>
        <i className='box icon' />
        {item.attributes.packed ? "Packed" : "Still needs to be packed"}
      </div>
      <div className='content'>
        <div className='ui toggle checkbox'>
          <input type='checkbox' name='packed' value={item.packed} />
          <label>Already Packed?</label>
        </div>
      </div>
    </div>
  );
};

export default Item;
