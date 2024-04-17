import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/api'; // Change this to your backend API URL

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/roles`);
        setRoles(response.data);
      } catch (error) {
        setError('Failed to fetch roles.');
      }
    };

    fetchRoles();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>Role Management</h2>
      <ul>
        {roles.map(role => (
          <li key={role._id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
