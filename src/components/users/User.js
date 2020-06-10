import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <li>{user.attributes.username}</li>
      </div>
    );
  }
}

export default User;
