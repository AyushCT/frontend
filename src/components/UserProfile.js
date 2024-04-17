import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/api/user'; // Change this to your backend API URL

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/user/profile`);
        setUserProfile(response.data);
      } catch (error) {
        setError('Failed to fetch user profile.');
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Role: {userProfile.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
