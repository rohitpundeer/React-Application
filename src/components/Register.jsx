import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './auth'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { fullname: '', email: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  SubmitForm(e) {
    localStorage.setItem('RegisteredUser', JSON.stringify({
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    }));
    this.state = { fullname: '', email: '', password: '' }
    alert("Success! Please Login.");
    e.target.Link = "/login";
  }

  render() {
    return (
      <div id="register-page">
        <div className="col-md-4 col-md-offset-4">
          <h2 className="text-center">Register</h2>
          <form id="register-form" onSubmit={this.SubmitForm}>
            <div className="form-group">
              <label className="control-label">Full Name</label>
              <input id="fullname" type="text" className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input id="email" type="text" className="form-control" onChange={this.handleChange} required minLength="5"></input>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input id="password" type="password" className="form-control" onChange={this.handleChange} required minLength="5"></input>
            </div>
            <div className="form-group">
              <span><Link to="/login" className="btn btn-info pull-left">Back to Login</Link></span>
              <button id="register" type="submit" className="btn btn-success pull-right">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;