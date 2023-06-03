import React, { useState } from 'react';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending the data to a server for authentication
    // You can use the userId and password values stored in the state

    // Reset the form
    setUserId('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password clicked");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ width: '100px' }}>Welcome to</p>
        <h1 style={{ color: '#f1f11c', width: '150px' }}>TAXCO</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="userId" style={{ width: '100px', display: 'inline-block' }}>User ID:</label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              placeholder="Enter your PAN"
              style={{ width: '200px' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ width: '100px', display: 'inline-block' }}>Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '200px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '310px',
              backgroundColor: 'yellow',
              fontWeight: 'bold', // Make the button text bold
              fontSize: '16px', // Adjust the font size if needed
              padding: '10px', // Increase the padding for a more prominent appearance
              border: 'none', // Remove the default button border
              borderRadius: '5px', // Add some border radius for a rounded button
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' // Add a subtle box shadow for depth
            }}
          >
            Login
          </button>
          <p>
            <button
              type="button"
              onClick={handleForgotPassword}
              style={{
                fontSize: '7px',
                border: 'none',
                background: 'none',
                padding: '0',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Forgot Password?
            </button>
          </p>
          <p style={{ marginTop: '2rem' }}>Developed and managed by ARKONET</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

