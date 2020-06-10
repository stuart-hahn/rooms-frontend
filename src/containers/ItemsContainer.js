import React from "react";
import { connect } from "react-redux";

class ItemsContainer extends React.Component {
  render() {
    console.log(this.props.itemsData);
    return (
      <div className='ui segment'>
        <div className='ui header'>
          {this.props.user.attributes.username}'s items
        </div>
        {this.props.itemsData.items.map((item) => {
          return <li key={item.id}>{item.attributes.name}</li>;
        })}
      </div>
    );
  }
}

export default connect()(ItemsContainer);
