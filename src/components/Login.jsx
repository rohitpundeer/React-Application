import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Auth from './auth'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', isLoggedIn: false };
    this.handleChange = this.handleChange.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    e.preventDefault();
  }

  SubmitForm(e) {
    var registeredUser = JSON.parse(localStorage.getItem('RegisteredUser'));
    if (registeredUser != null && registeredUser.email == this.state.email && registeredUser.password == this.state.password) {
      localStorage.setItem('currentUser', JSON.stringify({
        fullname: registeredUser.fullname,
        email: registeredUser.email,
        password: registeredUser.password,
        isLoggedIn: true
      }));
      e.target.Link = "/home";
    }
    else {
      alert("Invalid Credentials, please try again later!");
      e.preventDefault();
    }
  }

  render() {
    return (
      <div id="login-page">
        <div className="col-md-4 col-md-offset-4">
          <h2 className="text-center">Login</h2>
          <form id="login-form" onSubmit={this.SubmitForm}>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input id="email" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input id="password" type="password" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <span><Link to="/register" className="btn btn-info pull-left">Register</Link></span>
              <button id="btnlogin" type="submit" className="btn btn-success pull-right">Login</button>
            </div>
          </form>
        </div>
      </div >
    );
  }
}

export default Login;