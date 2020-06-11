import React from "react";
import { connect } from "react-redux";
import { selectedItem } from "../../actions/itemsActions";

const ItemsList = ({ items, selectedItem }) => {
  const renderList = () => {
    return items.map((item) => (
      <li onClick={() => selectedItem(item)} key={item.id}>
        {item.attributes.name}
      </li>
    ));
  };
  return <div>{renderList()}</div>;
};

export default connect(null, { selectedItem })(ItemsList);
