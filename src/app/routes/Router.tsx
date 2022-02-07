import React from 'react';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './Login';
import RecoveryPassword from './RecoveryPassword';
import Signin from './Signin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordRecovery" element={<RecoveryPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
