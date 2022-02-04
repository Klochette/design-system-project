import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signin from './Signin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
