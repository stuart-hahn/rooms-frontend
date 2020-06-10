import React from "react";
import User from "./User";

class Users extends React.Component {
  render() {
    const { users, onClickUser } = this.props;
    const usersList = users.map((user) => {
      return <User onClickUser={onClickUser} key={user.id} user={user} />;
    });

    return (
      <div className='ui link relaxed divided animated list'>{usersList}</div>
    );
  }
}

export default Users;
