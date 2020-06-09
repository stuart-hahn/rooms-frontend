import React from "react";

class UserCreate extends React.Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <form>
        <label>Username</label>
        <input type='text' placeholder='Username...' />
        <label>Password</label>
        <input type='password' placeholder='Password...' />
        <button type='submit'>Create User</button>
      </form>
    );
  }
}

export default UserCreate;
