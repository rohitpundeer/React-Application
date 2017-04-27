import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  
  constructor(props) {
    super(props);
    this.productList = [{ name: "iPhone 6", price: "$399", description: "Lorem ipsum dolor sit amet.", color: "black, gold, silver", dom: "01 March 2017" },
    { name: "iPhone 6s", price: "$499", description: "Lorem ipsum dolor sit amet.", color: "gold, silver", dom: "20 March 2017" },
    { name: "iPhone 7", price: "$599", description: "Lorem ipsum dolor sit amet.", color: "pink, gold, silver, red", dom: "31 March 2017" },
    { name: "iPhone 7+", price: "$699", description: "Lorem ipsum dolor sit amet.", color: "grey, gold, silver", dom: "03 April 2017" }];    
  }

  render() {
    var productArray = this.productList.map(function (product) {
      return <div key={product.name} className="well col-md-5 col-md-offset-1">
        <h2 >{product.name}</h2>
        <h4>Price : {product.price}</h4>
        <h4>Colors : {product.color}</h4>
        <h4>Manufacturing Date : {product.dom}</h4>
        <h4>Description : {product.description}</h4>
        <button id={product.name} data={product} onClick={BuyProduct.bind(this, product)} className="btn btn-success">Buy Now</button>
      </div>
    });

    return (
      <div id="product-page">
        <div className="col-md-10 col-md-push-1">
          <h2 className="text-center">Select Products</h2>
          <p className="text-center">Please choose a product from below listed items:</p>
          <form id="product-form">
            <div className="form-group"> {productArray} </div>
            <div className="form-group row col-md-11  col-md-offset-1">
              <span><Link to="/home" className="btn btn-info pull-left">Cancel</Link></span>
              <span><Link to="/shipping" className="btn btn-info pull-right">Next</Link></span>
            </div>
          </form>
        </div>
      </div >
    );
  }
}

function BuyProduct(product, e) {  
  e.preventDefault();  
  localStorage.setItem("mycart",JSON.stringify(product));
  alert("Item added to shopping cart! Please press Next button to enter shipping details");
}
export default Products;