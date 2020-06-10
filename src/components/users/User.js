import React from "react";

class User extends React.Component {
  render() {
    const { user, onClickUser } = this.props;

    return (
      <a onClick={() => onClickUser(user)} className='item'>
        {user.attributes.username}
      </a>
    );
  }
}

export default User;
