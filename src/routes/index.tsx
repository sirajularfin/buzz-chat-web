import React, { JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectIsLoggedIn } from 'src/redux/slices/auth.slice';
import { useAppSelector } from 'src/redux/store';
import Chat from '../pages/chat';
import Login from '../pages/login';
import Registration from '../pages/registration';
import { RoutePath } from './types';

function ProtectedRoute({ element }: { element: JSX.Element }) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={RoutePath.ROOT} replace />;
}

function RoutesConfig(): React.ReactElement {
  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<Login />} />
      <Route path={RoutePath.REGISTER} element={<Registration />} />
      <Route
        path={RoutePath.CHAT}
        element={<ProtectedRoute element={<Chat />} />}
      />
      <Route path="*" element={<Navigate to={RoutePath.ROOT} replace />} />
    </Routes>
  );
}

export default RoutesConfig;
