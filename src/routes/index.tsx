import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import { RoutePath } from './types';

function RoutesConfig(): React.ReactElement {
  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<Login />} />
    </Routes>
  );
}

export default RoutesConfig;
