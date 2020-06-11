import React from "react";
import { connect } from "react-redux";

import { selectedItem } from "../../actions/itemsActions";

const Item = ({ item, selectedItem }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => selectedItem(item)}
      className='item'
    >
      {item.attributes.name}
    </div>
  );
};

export default connect(null, { selectedItem })(Item);
