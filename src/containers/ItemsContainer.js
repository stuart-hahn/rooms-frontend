import React from "react";
import { connect } from "react-redux";

import { fetchUserItems } from "../actions/itemsActions";
import ItemsList from "../components/ItemsList";

class ItemsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUserItems(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <ItemsList
          user_id={this.props.match.params.id}
          users={this.props.usersData.users}
          items={this.props.itemsData.items}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ itemsData, usersData }) => ({
  itemsData,
  usersData,
});

export default connect(mapStateToProps, { fetchUserItems })(ItemsContainer);
