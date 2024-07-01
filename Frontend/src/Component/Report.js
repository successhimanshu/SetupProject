import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Report extends Component {
  render() {
    // Sample report data
    const reports = [
      {
        id: 1,
        title: 'Sales Report',
        description: 'Monthly sales report for the current year.',
        date: '2024-06-01'
      },
      {
        id: 2,
        title: 'Customer Feedback',
        description: 'Summary of customer feedback received last quarter.',
        date: '2024-05-15'
      },
      {
        id: 3,
        title: 'Inventory Report',
        description: 'Current inventory status and stock levels.',
        date: '2024-06-20'
      }
    ];

    return (
      <div className="container">
        <h2 className="my-4">Reports</h2>
        <div className="row">
          {reports.map(report => (
            <div className="col-md-4 mb-4" key={report.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{report.title}</h5>
                  <p className="card-text">{report.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Date: {report.date}</small>
                  </p>
                  <button className="btn btn-primary">View Report</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Report;
