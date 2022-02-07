import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import RecoveryPassword from './RecoveryPassword';
import Signin from './Signin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordRecovery" element={<RecoveryPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
