import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useResponsive from '../../hooks/useResponsive';

const useLogin = () => {
  const navigate = useNavigate();
  const isDesktop = useResponsive();

  const validationSchema = () =>
    Yup.object({
      email: Yup.string().email(),
      password: Yup.string().required('Password is required'),
    });

  return {
    navigate,
    isDesktop,
    validationSchema,
  };
};

export default useLogin;
