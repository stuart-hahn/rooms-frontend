import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  if (!currentUser) {
    return <Link to='/users/new'>Create a User</Link>;
  }
};

export default NavBar;
