import React from "react";
import { connect } from "react-redux";
import ItemCreate from "../components/items/ItemCreate";
import { Redirect } from "react-router-dom";
import ItemsList from "../components/items/ItemsList";
import Item from "../components/items/Item";

class ItemsContainer extends React.Component {
  render() {
    if (!this.props.currentUser) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <div className='ui segment'>
          <div className='ui header'>
            {this.props.user.attributes.username}'s items
          </div>
          <div>
            {this.props.currentUser &&
            this.props.currentUser.data.id === this.props.user.id ? (
              <ItemCreate user_id={this.props.currentUser.data.id} />
            ) : null}
          </div>
          <div className='ui divider' />
          <ItemsList
            selectedItem={this.props.selectedItem}
            items={this.props.itemsData.items}
          />
        </div>
        {this.props.itemsData.selectedItem ? (
          <div className='ui segment'>
            <Item item={this.props.itemsData.selectedItem} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ usersData }) => ({
  currentUser: usersData.currentUser,
});
export default connect(mapStateToProps)(ItemsContainer);
