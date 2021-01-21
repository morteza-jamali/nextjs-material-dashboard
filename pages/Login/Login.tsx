import React from 'react';
import styles from './Login.style';
import FacebookIcon from '../../components/FacebookIcon/FacebookIcon';
import GoogleIcon from '../../components/GoogleIcon/GoogleIcon';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Link from '../../components/Link';
import MainLayout from '../../components/MainLayout/MainLayout';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';

declare interface IFormProps {
  errors: any;
  handleBlur: any;
  handleChange: any;
  handleSubmit: any;
  isSubmitting: any;
  touched: any;
  values: any;
}

export default function Login() {
  const _styles = makeStyles(styles())();

  return (
    <MainLayout>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        className={_styles.root}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string()
                .max(255)
                .required('Password is required')
            })}
            onSubmit={() => {}}
          >
            {(props: IFormProps) => (
              <form onSubmit={props.handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={props.handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={props.handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box mt={3} mb={1}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(props.touched.email && props.errors.email)}
                  fullWidth
                  helperText={props.touched.email && props.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  type="email"
                  value={props.values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    props.touched.password && props.errors.password
                  )}
                  fullWidth
                  helperText={props.touched.password && props.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  type="password"
                  value={props.values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={props.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{' '}
                  <Link href="/register">Sign up</Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </MainLayout>
  );
}
