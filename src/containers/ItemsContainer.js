import React from "react";
import { connect } from "react-redux";
import ItemCreate from "../components/items/ItemCreate";

class ItemsContainer extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <div className='ui header'>
          {this.props.user.attributes.username}'s items
        </div>
        <div>
          {this.props.currentUser &&
          this.props.currentUser.id === this.props.user.id ? (
            <ItemCreate user_id={this.props.currentUser.id} />
          ) : null}
        </div>
        <div className='ui divider' />
        {this.props.itemsData.items.map((item) => {
          return <li key={item.id}>{item.attributes.name}</li>;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ usersData }) => ({
  currentUser: usersData.currentUser.data,
});
export default connect(mapStateToProps)(ItemsContainer);
