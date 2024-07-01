import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'location') {
      setLocation(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your API endpoint
    const apiUrl = 'http://localhost:8080/register';

    try {
      const response = await axios.post(apiUrl, {
        username,
        email,
        phone,
        location,
        password,
      });

      const data = response.data;

      if (response.status !== 200) {
        throw new Error(data.message || 'Registration failed');
      }

      if (data.message === 'User Created Successfully') {
        setError('');
        toast.success('User Created Successfully!');
        setTimeout(() => navigate('/'), 3000); // Redirect to the login page after 3 seconds
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid" style={{  backgroundSize: 'cover' }}>
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
            <h2 className="mb-3 text-center">Register</h2>
            {error && <p className="text-danger text-center">{error}</p>}
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
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={location}
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
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-block">Register</button>
            </div>
            <div className="text-center">
              <p>Already have an account? <button type="button" className="btn btn-link" onClick={handleLoginRedirect}>Login here</button></p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
