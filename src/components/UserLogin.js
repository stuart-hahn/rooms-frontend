import React from "react";
import { connect } from "react-redux";

import { loginUser } from "../actions/usersActions";
import { Redirect } from "react-router-dom";

class UserCreate extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onChangeInput = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    if (!this.props.currentUser) {
      return (
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor='username'>Username</label>
          <input
            onChange={this.onChangeInput}
            id='username'
            name='username'
            type='text'
            placeholder='Username...'
          />
          <label htmlFor='password'>Password</label>
          <input
            onChange={this.onChangeInput}
            id='password'
            name='password'
            type='password'
            placeholder='Password...'
          />
          <button type='submit'>Create User</button>
        </form>
      );
    }

    return <Redirect to='/' />;
  }
}

const mapStateToProps = ({ usersData }) => ({
  currentUser: usersData.currentUser,
});

export default connect(mapStateToProps, { loginUser })(UserCreate);
