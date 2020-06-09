import React from "react";
import { connect } from "react-redux";
import { fetchUsers, getCurrentUser } from "./actions/usersActions";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import UserCreate from "./components/UserCreate";
import NavBar from "./components/NavBar";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <NavBar currentUser={this.props.usersData.currentUser} />
        <Switch>
          <Route exact path='/users/new' component={UserCreate} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ usersData }) => ({
  usersData,
});

export default connect(mapStateToProps, { fetchUsers, getCurrentUser })(App);
