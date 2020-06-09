import React from "react";
import Item from "./Item";

const ItemsList = ({ items, users, user_id }) => {
  const renderItemsList = () => items.map((item) => <Item item={item} />);
  const user = users.find((user) => user.id === user_id);
  console.log(user);
  return (
    <div>
      <h1>
        {user ? `${user.attributes.username}'s items` : "Cannot find user"}
      </h1>
      {renderItemsList()}
    </div>
  );
};

export default ItemsList;
