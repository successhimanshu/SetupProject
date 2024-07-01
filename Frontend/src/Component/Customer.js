import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Customer extends Component {
  render() {
    // Sample customer data
    const customers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        location: 'New York'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '098-765-4321',
        location: 'Los Angeles'
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mikejohnson@example.com',
        phone: '555-555-5555',
        location: 'Chicago'
      }
    ];

    return (
      <div className="container">
        <h2 className="my-4">Customer List</h2>
        <div className="row">
          {customers.map(customer => (
            <div className="col-md-4 mb-4" key={customer.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{customer.name}</h5>
                  <p className="card-text">Email: {customer.email}</p>
                  <p className="card-text">Phone: {customer.phone}</p>
                  <p className="card-text">Location: {customer.location}</p>
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

export default Customer;
