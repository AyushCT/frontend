import React, { useState } from 'react';
import { register } from '../services/api';
import '../component.css'; // Import CSS for styling

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      // If any field is empty, display a message
      setErrorMessage('Please fill in all fields.');
      return;
    }
    try {
      await register(email, password, role);
      // Show popup on successful registration
      setShowPopup(true);
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (error) {
      console.error('Registration failed:', error);
      // If registration fails, display a message
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h2 className='register-heading'>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)} >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="normal_user">Normal User</option>
        </select>
        <button type="submit" style={{ marginTop: '20px' }}>Register</button>
      </form>
      {/* Display error message */}
      {errorMessage && <p className="error-message" style={{'color':'red'}}>{errorMessage}</p>}
      {/* Popup for successful registration */}
      {showPopup && (
        <div className="popup" >
          <p style={{'color':'green','fontSize':'23px'}}>Registration successful!</p>
          <p>Redirecting to login page...</p>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
