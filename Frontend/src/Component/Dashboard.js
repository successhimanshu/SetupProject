import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getUser');
      if (response.data && response.data.rescode === 1000) {
        this.setState({ users: response.data.data });
      } else {
        console.error('Error fetching users:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  exportToExcel = () => {
    const { users } = this.state;
    const worksheet = XLSX.utils.json_to_sheet(users);

    // Set the width for all columns
    const columns = Object.keys(users[0] || {}).map(key => ({ wpx: 120 }));
    worksheet['!cols'] = columns;

    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'users_data.xlsx');
  };

  exportToPDF = () => {
    const { users } = this.state;
    
    const doc = new jsPDF();
    const tableColumn = ['ID', 'Username', 'Email', 'Phone', 'Location', 'IsActive'];
    const tableRows = [];

    users.forEach(user => {
      const userData = [
        user.id,
        user.username,
        user.email,
        user.phone,
        user.location,
        user.isactive,
      ];
      tableRows.push(userData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 10 },
    });

    doc.save('users_data.pdf');
  };


  handleLogout = () => {
    // Perform logout logic here (e.g., clearing authentication tokens)
    // Then redirect to the login page
    window.location.href = '/';
  };

  render() {
    const { users } = this.state;

    // Prepare data for the graph
    const locationData = users.reduce((acc, user) => {
      const location = user.location;
      if (!acc[location]) {
        acc[location] = 0;
      }
      acc[location]++;
      return acc;
    }, {});

    const graphData = Object.keys(locationData).map(location => ({
      location,
      count: locationData[location],
    }));

    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/orders">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/customer">
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/report">
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.exportToPDF}>Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.exportToExcel}>
                    Export
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary ml-2" onClick={this.handleLogout}>
                    Log Out
                  </button>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">User Distribution by Location</h4>
                  </div>
                  <div className="card-body">
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="location" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Card title</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Card title</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
