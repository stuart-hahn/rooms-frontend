import React from "react";
import { connect } from "react-redux";
import UsersList from "../components/users/UsersList";
import ItemsContainer from "../containers/ItemsContainer";

import { fetchUserItems } from "../actions/itemsActions";

class UsersContainer extends React.Component {
  state = {
    selectedUser: null,
  };

  onClickUser = (user) => {
    if (this.props.usersData.currentUser) {
      this.setState({
        selectedUser: user,
      });
      this.props.fetchUserItems(user.id);
      this.props.history.replace(`/users/${user.id}/items`);
      this.props.itemsData.selectedItem = null;
    }
  };

  render() {
    return (
      <div className='ui grid'>
        <div className='ui row'>
          <div className='five wide column'>
            <UsersList
              onClickUser={this.onClickUser}
              users={this.props.usersData.users}
            />
          </div>
          <div className='eleven wide column'>
            {!this.props.usersData.currentUser ? (
              <div>You must be logged in to see a user's items.</div>
            ) : null}
            {this.state.selectedUser ? (
              <ItemsContainer user={this.state.selectedUser} />
            ) : (
              <div>Choose a user from the list</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ usersData, itemsData }) => ({
  usersData,
  itemsData,
});

export default connect(mapStateToProps, { fetchUserItems })(UsersContainer);
