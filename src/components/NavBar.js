import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutCurrentUser } from "../actions/usersActions";

const NavBar = ({ currentUser, logoutCurrentUser }) => {
  if (currentUser) {
    return (
      <div>
        <button onClick={logoutCurrentUser}>Log Out</button>
      </div>
    );
  }

  return <Link to='/users/new'>Create a User</Link>;
};

export default connect(null, { logoutCurrentUser })(NavBar);
