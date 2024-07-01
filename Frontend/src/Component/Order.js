import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Order extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="my-4">Order Management</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Order Filters</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="orderStatus">Order Status</label>
                    <select className="form-control" id="orderStatus">
                      <option>All</option>
                      <option>Pending</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateFrom">Date From</label>
                    <input type="date" className="form-control" id="dateFrom" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateTo">Date To</label>
                    <input type="date" className="form-control" id="dateTo" />
                  </div>
                  <button type="submit" className="btn btn-primary">Apply Filters</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Order List</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Total</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>John Doe</td>
                      <td>2024-06-30</td>
                      <td>Pending</td>
                      <td>$100.00</td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-danger ml-2">Cancel</button>
                      </td>
                    </tr>
                    {/* Add more orders as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
