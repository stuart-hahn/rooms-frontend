import React from "react";
import User from "./User";

class Users extends React.Component {
  render() {
    const { users } = this.props;
    const usersList = users.map((user) => {
      return <User key={user.id} user={user} />;
    });

    return <ul>{usersList}</ul>;
  }
}

export default Users;
