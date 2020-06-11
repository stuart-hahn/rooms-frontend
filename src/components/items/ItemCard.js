import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const Item = ({ item, currentUser }) => {
  const currentUserId = parseInt(currentUser.id, 10);
  const itemUserId = item.attributes.user_id;
  const ownedItem = currentUserId === itemUserId;
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
      {ownedItem ? (
        <Link to={`/users/${currentUserId}/items/${item.id}/edit`}>
          Edit this item
        </Link>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ usersData }) => ({
  currentUser: usersData.currentUser.data,
});

export default connect(mapStateToProps)(Item);
