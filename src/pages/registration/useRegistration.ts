import * as Yup from 'yup';
import useResponsive from '../../hooks/useResponsive';

const useRegistration = () => {
  const isDesktop = useResponsive();

  const validationSchema = () =>
    Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters long'),
      lastName: Yup.string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters long'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is not valid'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().required('Confirm password is required'),
    });

  return {
    isDesktop,
    validationSchema,
  };
};

export default useRegistration;
