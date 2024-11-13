import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// PrivateRoute component that checks for JWT token in localStorage
const PrivateRoute = () => {
  const token = localStorage.getItem('token'); // Check for JWT token in localStorage

  if (!token) {
    // If no token is found, redirect to login
    return <Navigate to="/login" />;
  }

  // If token exists, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
