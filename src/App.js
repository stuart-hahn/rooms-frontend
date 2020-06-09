import React from "react";
import { connect } from "react-redux";
import { fetchUsers, getCurrentUser } from "./actions/usersActions";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import UserCreate from "./components/UserCreate";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/users/new' component={UserCreate} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchUsers, getCurrentUser })(App);
