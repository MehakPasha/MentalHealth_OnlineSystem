import React, { useState } from 'react';
import './LoginSignup.css'; // Import the CSS file for styling

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.username !== '' &&
      formData.password !== '' &&
      formData.confirmPassword !== '' &&
      formData.password === formData.confirmPassword
    ) {
      console.log('Username:', formData.username);
      console.log('Password:', formData.password);
      console.log('Confirmed Password:', formData.confirmPassword);
      setFormData({ username: '', password: '', confirmPassword: '' });
    } else {
      alert('Please fill in all fields and ensure passwords match');
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="signup-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
