import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = { fullname: '', email: '', phone: '', address: '', city: '', state: '', zipcode: '', country: '' };
    this.handleChange = this.handleChange.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    e.preventDefault();
  }

  SubmitForm(e) {
    localStorage.setItem('shipping', JSON.stringify({
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      country: this.state.country
    }));
    alert("Shipping Details saved successfully.");
    e.target.Link = "/shipping";//.preventDefault();
  }

  render() {
    return (
      <div id="shipping-page">
        <div className="col-md-10 col-md-push-1">
          <h2 className="text-center">Shipping Details</h2>
          <p className="text-center">Please fill the below form, all fields are mandatory.</p>
          <form id="shipping-form" onSubmit={this.SubmitForm}>
            <div className="form-group col-md-6">
              <label className="control-label">Full Name</label>
              <input id="fullname" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Email</label>
              <input id="email" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Phone</label>
              <input id="phone" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group col-md-6">
              <label className="control-label">Address</label>
              <input id="address" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group  col-md-6">
              <label className="control-label">City</label>
              <input id="city" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group  col-md-6">
              <label className="control-label">State</label>
              <input id="state" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group  col-md-6">
              <label className="control-label">Zipcode</label>
              <input id="zipcode" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group  col-md-6">
              <label className="control-label">Country</label>
              <input id="country" type="text" required className="form-control" onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <span><Link to="/products" className="btn btn-info pull-left">Previous</Link></span>
              <span><Link to="/checkout" onClick={this.SubmitForm} className="btn btn-info pull-right">Next</Link></span>
            </div>
          </form>
        </div>
      </div >
    );
  }
}

export default Shipping;