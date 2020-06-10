import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>This is not the page you are looking for.</div>
      <Link className='ui green button' to='/'>
        Let's go home
      </Link>
    </div>
  );
};

export default NotFound;
