import { Formik } from 'formik';
import Button from '../../components/button';
import Container from '../../components/container';
import Text from '../../components/text';
import { FontVariant } from '../../components/text/styles';
import TextInput from '../../components/textInput';
import Colors from '../../themes/colors';
import PixelScale from '../../themes/sizes';
import styles from './styles';
import useLogin from './useLogin';

function Login(): React.ReactElement {
  const { loginFormValidation } = useLogin();

  return (
    <Container height="80%" alignContent="center">
      <Container marginBottom={PixelScale.XL_50}>
        <Text
          color={Colors.WHITE}
          textAlign="center"
          variant={FontVariant.HeadingSmall}
        >
          Join the conversation
        </Text>
      </Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={loginFormValidation.validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} style={styles.loginForm}>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              variant="ROUNDED"
            />
            {errors.email && touched.email && errors.email}
            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              variant="ROUNDED"
            />
            {errors.password && touched.password && errors.password}
            <Container
              display="flex"
              flexDirection="column"
              marginTop={PixelScale.XL_50}
            >
              <Button disabled={isSubmitting} title="LOG IN" type="submit" />
            </Container>
          </form>
        )}
      </Formik>
      <Text
        variant={FontVariant.LabelLarge}
        color={Colors.GREY_50}
        textAlign="center"
        styles={{
          marginTop: PixelScale.XL_50,
        }}
      >
        Forgot Password ?
      </Text>
      <Text
        variant={FontVariant.LabelLarge}
        color={Colors.GREY_50}
        textAlign="center"
        styles={{
          marginTop: PixelScale.XL_50,
        }}
      >
        Don’t have an account? Create new account
      </Text>
    </Container>
  );
}

export default Login;
