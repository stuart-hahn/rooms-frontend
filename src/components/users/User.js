import React from "react";

class User extends React.Component {
  render() {
    const { user, onClickUser } = this.props;

    return (
      <div onClick={() => onClickUser(user)} className='item'>
        {user.attributes.username}
      </div>
    );
  }
}

export default User;
