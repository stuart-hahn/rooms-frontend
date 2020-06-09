import React from "react";
import ItemsContainer from "../containers/ItemsContainer";

class Restaurant extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <li>
          {user.attributes.username}
          <ItemsContainer user={user} />
        </li>
      </div>
    );
  }
}

export default Restaurant;
