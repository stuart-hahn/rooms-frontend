import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UsersContainer extends React.Component {
  renderList = () => {
    return this.props.usersData.users.map((user) => (
      <Link key={user.id} className='item' to={`/users/${user.id}/items`}>
        {user.attributes.username}
      </Link>
    ));
  };

  render() {
    return (
      <div className='ui grid'>
        <div className='ui row'>
          <div className='five wide column'>
            <div className='ui relaxed divided list'>{this.renderList()}</div>
          </div>
          <div className='eleven wide column'>
            Click on a user to see their items.
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ usersData }) => ({
  usersData,
});
export default connect(mapStateToProps)(UsersContainer);
