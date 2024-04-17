// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './components/UserProfile';


function App() {
  const isAuthenticated = false; // Set your authentication logic here

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile"  element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
