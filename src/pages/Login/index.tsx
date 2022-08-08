import React, { FC } from 'react';
import { Box, Link } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as S from './styles';
import { Button, Typography } from '../../components';
import { login } from '../../redux/actions';
import * as Yup from 'yup';

export const LoginPage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validation.email_invalid'))
      .max(80, t('validation.max_length'))
      .required(t('validation.email_required')),
    plainPassword: Yup.string()
      .required(t('validation.password_required')),
  });

  const formik = useFormik<any>({
    initialValues: {
      email: '',
      plainPassword: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      dispatch(login(values));
    },
  });

  return (
    <S.Container>
      <S.Logo src="/assets/images/logo.svg" alt="logo" />

      <form onSubmit={formik.handleSubmit}>
        <S.Card>

          <S.Title mb={24}>
            <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>{t('login.sign_in')}</Typography>
          </S.Title>

            <S.FormWrapper mb={24}>
              <S.FormInput
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder={t('login.email')}
                {...formik.getFieldProps('email')}
              />
            </S.FormWrapper>
            <S.FormWrapper>
              <S.FormInput
                error={!!(formik.touched.plainPassword && formik.errors.plainPassword)}
                helperText={formik.touched.plainPassword && formik.errors.plainPassword}
                placeholder={t('login.password')}
                type="password"
                {...formik.getFieldProps('plainPassword')}
              />
            </S.FormWrapper>
            <Link mb={16} textAlign="right" width="100%" href="/auth/signup" underline="none">
              <Typography variant="body2">{t('login.forgot_password')}</Typography>
            </Link>

            <Box mt={16}>
              <Button size="large" color="primary" type="submit">{t('login.submit')}</Button>
            </Box>
        </S.Card>
      </form>

      <Box display="flex" mt={16}>
        <Typography variant="body1" mr={8}>{t('login.question')}</Typography>
        <Link href="/register">
          <Typography variant="h4">{t('login.sign_up')}</Typography>
        </Link>
      </Box>
    </S.Container>
  )
}
