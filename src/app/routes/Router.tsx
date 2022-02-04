import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'app/routes/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" />
        <Route path="/login" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
