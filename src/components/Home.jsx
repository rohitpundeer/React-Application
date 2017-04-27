import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Products from './Products';
import Shipping from './Shipping';
import Checkout from './Checkout';

class Home extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav role="navigation" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand">React App</div>
              </div>
              <div id="navbar" className="navbar">
                <ul className="nav navbar-nav">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/shipping">Shipping</Link></li>
                  <li><Link to="/checkout">Checkout</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="scroll">
            <Route path="/products" component={Products} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;