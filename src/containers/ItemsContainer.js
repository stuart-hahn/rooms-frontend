import React from "react";
import { connect } from "react-redux";

import { fetchUserItems } from "../actions/itemsActions";
import ItemsList from "../components/ItemsList";

class ItemsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUserItems(this.props.match.params.id);
  }
  state = {};

  render() {
    return (
      <div>
        <ItemsList items={this.props.itemsData.items} />
      </div>
    );
  }
}

const mapStateToProps = ({ itemsData }) => ({
  itemsData,
});

export default connect(mapStateToProps, { fetchUserItems })(ItemsContainer);
