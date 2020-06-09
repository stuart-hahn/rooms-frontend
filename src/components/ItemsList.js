import React from "react";

const ItemsList = ({ items }) => {
  const renderItemsList = () =>
    items.map((item) => <div>{item.attributes.name}</div>);
  return <div>{renderItemsList()}</div>;
};

export default ItemsList;
