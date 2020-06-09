import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutCurrentUser } from "../actions/usersActions";

const NavBar = ({ currentUser, logoutCurrentUser }) => {
  return (
    <div className='ui secondary pointing menu'>
      {currentUser ? (
        <button className='ui blue button' onClick={logoutCurrentUser}>
          Log Out
        </button>
      ) : (
        <Link className='ui green button' to='/login'>
          Log In
        </Link>
      )}
    </div>
  );
};

export default connect(null, { logoutCurrentUser })(NavBar);
