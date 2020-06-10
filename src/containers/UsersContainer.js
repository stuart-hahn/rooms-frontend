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
    this.setState({
      selectedUser: user,
    });
    this.props.fetchUserItems(user.id);
    this.props.history.replace(`/users/${user.id}/items`);
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
            {this.state.selectedUser ? (
              <ItemsContainer
                itemsData={this.props.itemsData}
                user={this.state.selectedUser}
              />
            ) : null}
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
