import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Registration from '../pages/registration';
import { RoutePath } from './types';

function RoutesConfig(): React.ReactElement {
  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<Login />} />
      <Route path={RoutePath.REGISTER} element={<Registration />} />
    </Routes>
  );
}

export default RoutesConfig;
