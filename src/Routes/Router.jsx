import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" />
        <Route path="login" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
