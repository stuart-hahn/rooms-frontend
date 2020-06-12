import React from "react";
import { connect } from "react-redux";

const Item = ({ item, user }) => {
  const onChangeToggle = () => {
    console.log(user);
    console.log(!item.attributes.packed);
  };
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
          <input
            onChange={onChangeToggle}
            type='checkbox'
            name='packed'
            value={item.packed}
          />
          <label>Already Packed?</label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ usersData }) => ({
  user: usersData.currentUser.data,
});

export default connect(mapStateToProps)(Item);
