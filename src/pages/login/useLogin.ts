import * as Yup from 'yup';

const useLogin = () => {
  const loginFormValidation = Yup.object({
    email: Yup.string().email(),
    password: Yup.string().required('Password is required'),
  });

  return {
    loginFormValidation,
  };
};

export default useLogin;
