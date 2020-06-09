import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./actions/usersActions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return <div>App</div>;
  }
}

export default connect(null, { fetchUsers })(App);
