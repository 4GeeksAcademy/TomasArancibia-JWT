import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  return sessionStorage.getItem('token') ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;