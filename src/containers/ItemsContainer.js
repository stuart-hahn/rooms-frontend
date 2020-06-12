import React from "react";
import ItemCreate from "../components/items/ItemCreate";
import { Redirect } from "react-router-dom";
import ItemsList from "../components/items/ItemsList";
import ItemCard from "../components/items/ItemCard";

class ItemsContainer extends React.Component {
  render() {
    if (!this.props.currentUser) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <div className='ui segment'>
          <div className='ui header'>
            {this.props.selectedUser.attributes.username}'s items
          </div>
          <div>
            {this.props.currentUser &&
            this.props.currentUser.data.id === this.props.selectedUser.id ? (
              <ItemCreate user_id={this.props.currentUser.data.id} />
            ) : null}
          </div>
          <div className='ui divider' />
          <ItemsList
            currentUser={this.props.currentUser}
            selectedItem={this.props.selectedItem}
            itemsData={this.props.items}
          />
        </div>
        {this.props.items.selectedItem ? (
          <div className='ui segment'>
            <ItemCard
              currentUser={this.props.currentUser}
              item={this.props.items.selectedItem}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ItemsContainer;
