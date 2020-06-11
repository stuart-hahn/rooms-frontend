import React from "react";
import { connect } from "react-redux";

import { loginUser } from "../../actions/usersActions";
import { Redirect, NavLink } from "react-router-dom";

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
        <div className='ui placeholder segment'>
          <div className='ui two column very relaxed stackable grid'>
            <div className='column'>
              <form onSubmit={this.onSubmitForm} className='ui form'>
                <div className='field'>
                  <label htmlFor='username'>Username</label>
                  <div className='ui left icon input'>
                    <input
                      onChange={this.onChangeInput}
                      id='username'
                      name='username'
                      type='text'
                      placeholder='Username...'
                    />
                    <i className='user icon'></i>
                  </div>
                </div>
                <div className='field'>
                  <label htmlFor='password'>Password</label>
                  <div className='ui left icon input'>
                    <input
                      onChange={this.onChangeInput}
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Password...'
                    />
                    <i className='lock icon'></i>
                  </div>
                </div>
                <button type='submit' className='ui blue submit button'>
                  Log In
                </button>
              </form>
            </div>
            <div className='middle aligned column'>
              <NavLink to='/users/new' className='ui big button'>
                <i className='signup icon'></i>
                Sign Up
              </NavLink>
            </div>
          </div>
          <div className='ui vertical divider'>Or</div>
        </div>
      );
    }

    // if (!this.props.currentUser) {
    //   return (
    //     <form className='ui form' >
    //       <div className='field'>
    //         <label htmlFor='username'>Username</label>

    //       </div>
    //       <div className='field'>
    //         <label htmlFor='password'>Password</label>

    //       </div>
    //       <button className='ui green button' type='submit'>
    //         Create User
    //       </button>
    //     </form>
    //   );
    // }

    return <Redirect to='/' />;
  }
}

const mapStateToProps = ({ usersData }) => ({
  currentUser: usersData.currentUser,
});

export default connect(mapStateToProps, { loginUser })(UserCreate);
