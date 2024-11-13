import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import EmployeeManagementApp from './components/EmployeeManagementApp';
import EmployeeDetails from './components/EmployeeDetails';
import PrivateRoute from './components/PrivateRoute'; 
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes - Only accessible if authenticated */}
          <Route element={<PrivateRoute />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/employee" element={<EmployeeManagementApp />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
          </Route>

          {/* Redirect unknown routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
