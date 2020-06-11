import React from "react";
import Item from "./Item";

const ItemsList = ({ items, selectedItem }) => {
  const renderList = () => {
    return items.map((item) => (
      <Item key={item.id} item={item} />
      // <li onClick={() => selectedItem(item)} key={item.id}>
      //   {item.attributes.name}
      // </li>
    ));
  };
  return <div>{renderList()}</div>;
};

export default ItemsList;
