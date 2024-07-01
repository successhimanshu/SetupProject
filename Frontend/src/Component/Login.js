import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:8080/login';

    try {
      const response = await axios.post(apiUrl, {
        username,
        password,
      });
      const data = response.data;

      if (response.status !== 200) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.rescode === 1000) {
        setError('');
        setSuccessMessage('Login successful!');
        toast.success('User Loggedin Successfully!');
        setTimeout(() => navigate('/dashboard'), 1500); // Redirect to the dashboard page
      } else if (data.rescode === 1001) {
        throw new Error(data.message || 'Invalid credentials');
      } else {
        throw new Error('Login failed'); // Handle unexpected response
      }
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
<div className="container-fluid" style={{ 
  
  backgroundSize: 'cover' // Adjust the alpha value (0.2) for desired opacity
}}>
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
            <h2 className="mb-3 text-center">Login</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            {successMessage && <p className="text-success text-center">{successMessage}</p>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block mb-2">Login</button>
              <button type="button" className="btn btn-secondary btn-block" onClick={handleRegisterRedirect}>Register</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
