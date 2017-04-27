import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.mycart = JSON.parse(localStorage.getItem("mycart"));
    this.shipping = JSON.parse(localStorage.getItem("shipping"));
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  SubmitForm(e) {
    localStorage.removeItem('mycart');
    localStorage.removeItem('shipping');
    alert("Your order has been shipped successfully!");
    e.target.Link = "/home";
  }

  render() {
    return (
      <div id="checkout-page">
        <div className="col-md-8 col-md-push-2">
          <h2 className="text-center">Checkout</h2>
          <p className="text-center">Please verify your order before completing the transaction.</p>
          <form id="checkout-form">
            <div id="product-details" className="well col-md-5 col-md-offset-1">
              <h2 >{this.mycart.name}</h2>
              <h4>Price : {this.mycart.price}</h4>
              <h4>Colors : {this.mycart.color}</h4>
              <h4>Manufacturing Date : {this.mycart.dom}</h4>
              <h4>Description : {this.mycart.description}</h4>
            </div>
            <div id="shipping-details" className="well col-md-5 col-md-offset-1">
              <h3>Full Name : {this.shipping.fullname}</h3>
              <h4>Phone : {this.shipping.phone}</h4>
              <h4>Address : {this.shipping.address + ", " + this.shipping.city + ", " + this.shipping.state}</h4>              
              <h4>Country : {this.shipping.country} </h4>
              <h4>Zipcode : {this.shipping.zipcode}</h4>              
              <h4>EMail : {this.shipping.email}</h4>
            </div>
            <div className="form-group">
              <span><Link to="/shipping" className="btn btn-info pull-left">Previous</Link></span>
              <span><Link to="/home" onClick={this.SubmitForm} className="btn btn-info pull-right">Confirm</Link></span>
            </div>
          </form>
        </div>
      </div >
    );
  }
}

export default Checkout;