import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutCurrentUser } from "../actions/usersActions";

const NavBar = ({ currentUser, logoutCurrentUser }) => {
  return (
    <div className='ui secondary pointing menu'>
      <NavLink exact className='item' to='/'>
        Home
      </NavLink>
      <NavLink exact className='item' to='/users'>
        Users
      </NavLink>
      {currentUser ? (
        <button
          onClick={logoutCurrentUser}
          className='ui menu right red button'
        >
          Log Out
        </button>
      ) : (
        <NavLink exact className='right menu item' to='/login'>
          Log In
        </NavLink>
      )}
    </div>
  );
};

export default connect(null, { logoutCurrentUser })(NavBar);
