import { Formik } from 'formik';
import Button from '../../components/button';
import Container from '../../components/container';
import ScreenLayout from '../../components/screen-layout';
import Text from '../../components/text';
import { FontVariant } from '../../components/text/styles';
import TextInput from '../../components/textInput';
import Colors from '../../themes/colors';
import PixelScale from '../../themes/sizes';
import styles from './styles';
import useRegistration from './useRegistration';

function Registration(): React.ReactElement {
  const { isDesktop, validationSchema } = useRegistration();
  const style = styles(isDesktop);

  return (
    <ScreenLayout styles={style.container}>
      <Text
        color={Colors.WHITE}
        textAlign="center"
        variant={
          isDesktop ? FontVariant.HeadingMedium : FontVariant.HeadingSmall
        }
      >
        Create Your Account
      </Text>
      <Container marginBottom={PixelScale.XL_50} />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
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
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              variant="ROUNDED"
              error={
                errors.firstName && touched.firstName ? errors.firstName : null
              }
            />
            <TextInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              variant="ROUNDED"
              error={
                errors.lastName && touched.lastName ? errors.lastName : null
              }
            />
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
            <TextInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              variant="ROUNDED"
              error={
                errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : null
              }
            />
            <Container
              display="flex"
              flexDirection="column"
              marginTop={PixelScale.S_20}
            >
              <Button disabled={isSubmitting} title="REGISTER" type="submit" />
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
        Already have an account? Log in
      </Text>
    </ScreenLayout>
  );
}

export default Registration;
