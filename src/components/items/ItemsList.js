import React from "react";

const ItemsList = ({ items }) => {
  const renderList = () => {
    return items.map((item) => <li key={item.id}>{item.attributes.name}</li>);
  };
  return <div>{renderList()}</div>;
};

export default ItemsList;
