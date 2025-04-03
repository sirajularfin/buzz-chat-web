import { Formik } from 'formik';
import Button from '../../components/button';
import Container from '../../components/container';
import ScreenLayout from '../../components/screen-layout';
import Text from '../../components/text';
import { FontVariant } from '../../components/text/styles';
import TextInput from '../../components/textInput';
import { RoutePath } from '../../routes/types';
import Colors from '../../themes/colors';
import PixelScale from '../../themes/sizes';
import styles from './styles';
import useLogin from './useLogin';

function Login(): React.ReactElement {
  const { navigate, isDesktop, validationSchema } = useLogin();
  const style = styles(isDesktop);

  return (
    <ScreenLayout styles={style.container}>
      <Text
        color={Colors.WHITE}
        textAlign="center"
        variant={
          isDesktop ? FontVariant.DisplayLarge : FontVariant.HeadingLarge
        }
      >
        Join the conversation
      </Text>
      <Container marginBottom={PixelScale.XL_50} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validationSchema}
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
          <form onSubmit={handleSubmit} style={style.loginForm}>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              variant="ROUNDED"
              error={errors.email && touched.email ? errors.email : null}
            />
            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              variant="ROUNDED"
              error={
                errors.password && touched.password ? errors.password : null
              }
            />
            <Container
              display="flex"
              flexDirection="column"
              marginTop={PixelScale.S_20}
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
      <Container
        display="flex"
        alignItems="baseline"
        justifyContent="center"
        gap={PixelScale.XS_5}
      >
        <Text
          variant={FontVariant.LabelLarge}
          color={Colors.GREY_50}
          textAlign="center"
          styles={{
            marginTop: PixelScale.XL_50,
          }}
        >
          Don’t have an account?
        </Text>
        <Text
          variant={FontVariant.LabelLarge}
          color={Colors.GREY_50}
          textAlign="center"
          onClick={() => navigate(RoutePath.REGISTER)}
        >
          Create new account
        </Text>
      </Container>
    </ScreenLayout>
  );
}

export default Login;
