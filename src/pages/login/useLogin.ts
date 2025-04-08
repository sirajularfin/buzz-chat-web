import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostLoginMutation } from 'src/api/endpoints/auth';
import {
  ILoginRequest,
  ILoginResponse,
} from 'src/models/interfaces/login.interface';
import { setAuthTokens } from 'src/redux/slices/appSession.slice';
import { setIsLoggedIn } from 'src/redux/slices/auth.slice';
import { useAppDispatch } from 'src/redux/store';
import { RoutePath } from 'src/routes/types';
import logger from 'src/util/logger.util';
import * as Yup from 'yup';
import useResponsive from '../../hooks/useResponsive';

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isDesktop = useResponsive();

  const [triggerPostLogin, { isError }] = usePostLoginMutation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onLoginSuccess = useCallback((response: ILoginResponse) => {
    dispatch(setIsLoggedIn(true));
    dispatch(setAuthTokens(response));
    navigate(RoutePath.CHAT);
  }, []);

  const onFormSubmit = useCallback(
    async ({ email, password }: ILoginRequest) => {
      logger(`Login form submitted with email: ${email}`);
      const request: ILoginRequest = { email, password };
      const response = await triggerPostLogin(request).unwrap();
      if (!isError) {
        onLoginSuccess(response);
      }
    },
    [isError],
  );

  return {
    navigate,
    isDesktop,
    onFormSubmit,
    validationSchema,
  };
};

export default useLogin;
