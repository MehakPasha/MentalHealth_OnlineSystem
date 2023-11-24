import React, { useState } from 'react';
import './LoginSignup.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username !== '' && formData.password !== '') {
      console.log('Username:', formData.username);
      console.log('Password:', formData.password);
      setFormData({ username: '', password: '' });
    } else {
      alert('Please fill in both username and password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="additional-options">
          <span className="forgot-password">Forgot Password?</span>
        </div>
        <div className="form-group-buttons">
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="button" className="signup-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
