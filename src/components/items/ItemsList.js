import React from "react";
import Item from "./Item";

const ItemsList = ({ items, selectedItem }) => {
  const renderList = () => {
    return items.map((item) => <Item key={item.id} item={item} />);
  };
  return <div className='ui link relaxed animated list'>{renderList()}</div>;
};

export default ItemsList;
