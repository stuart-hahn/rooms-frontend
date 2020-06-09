import React from "react";
import { connect } from "react-redux";
import UsersList from "../components/users/UsersList";

class UsersContainer extends React.Component {
  render() {
    return (
      <div>
        <UsersList users={this.props.usersData.users} />
      </div>
    );
  }
}

const mapStateToProps = ({ usersData }) => ({
  usersData,
});
export default connect(mapStateToProps)(UsersContainer);
