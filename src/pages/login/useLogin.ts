import * as Yup from 'yup';
import useResponsive from '../../hooks/useResponsive';

const useLogin = () => {
  const isDesktop = useResponsive();

  const loginFormValidation = Yup.object({
    email: Yup.string().email(),
    password: Yup.string().required('Password is required'),
  });

  return {
    isDesktop,
    loginFormValidation,
  };
};

export default useLogin;
