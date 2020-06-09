import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const UsersContainer = ({ usersData }) => {
  const renderList = () => {
    return usersData.users.map((user) => (
      <Link className='item' to={`/users/${user.id}/items`}>
        {user.attributes.username}
      </Link>
    ));
  };
  return <div className='ui relaxed list'>{renderList()}</div>;
};

const mapStateToProps = ({ usersData }) => ({
  usersData,
});
export default connect(mapStateToProps)(UsersContainer);
