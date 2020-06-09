import React from "react";
import { connect } from "react-redux";

import { fetchUserItems } from "../actions/itemsActions";

class ItemsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUserItems(this.props.match.params.id);
  }
  state = {};
  render() {
    return <div>Items Container</div>;
  }
}

export default connect(null, { fetchUserItems })(ItemsContainer);
