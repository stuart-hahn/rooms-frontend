import React from "react";
import Item from "./Item";

const ItemsList = ({ itemsData }) => {
  const renderList = () => {
    return itemsData.items.map((item) => <Item key={item.id} item={item} />);
  };
  return <div className='ui link relaxed animated list'>{renderList()}</div>;
};

export default ItemsList;
