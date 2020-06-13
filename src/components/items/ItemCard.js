import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item, currentUser }) => {
  const owned = item.attributes.user_id === parseInt(currentUser.data.id, 10);
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
      {owned ? (
        <div>
          <Link
            to={{
              pathname: `/users/${item.attributes.user_id}/items/${item.id}/edit`,
              state: {
                currentUser,
                item,
              },
            }}
          >
            Edit
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ItemCard;
