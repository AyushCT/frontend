import React, { useState } from 'react';
import { login } from '../services/api';
import '../component.css'; // Import CSS for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      // If email or password is empty, display a message
      setErrorMessage('Please fill in both email and password fields.');
      return;
    }
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.data.token);
      setShowPopup(true); // Show popup on successful login
      // Optionally, you can redirect to another page after successful login
      // history.push('/profile');
    } catch (error) {
      console.error('Login failed:', error);
      // If login fails, display a message
      setErrorMessage('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-page">
      <h2 className='login-heading'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {/* Display error message */}
      {errorMessage && <p className="error-message" style={{'color':'red'}}>{errorMessage}</p>}
      {/* Popup for successful login */}
      {showPopup && (
        <div className="popup">
          <p>Login successful!</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
