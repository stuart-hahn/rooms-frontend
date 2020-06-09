import React from "react";

const Item = ({ item }) => {
  return <div>{item.attributes.name}</div>;
};

export default Item;
