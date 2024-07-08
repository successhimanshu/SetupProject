// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Register from './Component/Register';
import Order from './Component/Order';
import Product from './Component/Product';
import Customer from './Component/Customer';
import Report from './Component/Report';
import Navbar from './Component/Navbar';
import AdminDashboard from './Component/AdminDashboard';
import SuperadminDashboard from './Component/SuperadminDashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          {/* Routes with Navbar */}
          <Route path="/orders/*" element={<>
            <Navbar />
            <Order />
          </>} />
          <Route path="/products/*" element={<>
            <Navbar />
            <Product />
          </>} />
          <Route path="/customer/*" element={<>
            <Navbar />
            <Customer />
          </>} />
          <Route path="/report/*" element={<>
            <Navbar />
            <Report />
          </>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/superadmin-dashboard" element={<SuperadminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
