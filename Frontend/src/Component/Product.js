import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Product extends Component {
  render() {
    // Sample product data
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: '$50.00',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Product 2',
        price: '$70.00',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Product 3',
        price: '$30.00',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ];

    return (
      <div className="container">
        <h2 className="my-4">Product List</h2>
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
