import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Link,
  Stack,
} from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { Button, Typography } from '../../components';
import { Stepper } from '../../components/Common/Stepper';
import { getRegisterForms, register } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { buildFormInitialData, buildFormSchema } from '../../utils';
import { IForm } from '../../interfaces';
import { FormBuilder } from '../../components/FormBuilder';

export const RegisterPage: FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const registerForms = useSelector(
    ({ authReducer: { registerForms } }: RootState) => registerForms
  );

  const [step ,setStep] = useState(0);
  const [registerSucceed, setRegisterSucceed] = useState(false);

  useEffect(() => {
    (async () =>  await dispatch(getRegisterForms()))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValue = useMemo(() => {
    return buildFormInitialData(registerForms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerSchema = useMemo(() => {
    return buildFormSchema(registerForms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentStepContent: IForm = useMemo(() => registerForms && Object.values(registerForms)[step] as IForm, [step, registerForms]);
  const currentStepKey: string = useMemo(() => registerForms && Object.keys(registerForms)[step], [step, registerForms]);

  const formik = useFormik<any>({
    initialValues: initialValue,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const result = await dispatch(register(values)) as any;
      if (result?.value?.success) {
        setRegisterSucceed(true);
      }
    },
  });

  const handleNextClick = () => {
    if (step === 0) {
      setStep(step + 1);
    }
  };

  const handleBackClick = () => {
    if (step === 1) {
      setStep(step - 1);
    }
  };

  return (
    <S.Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <S.Logo src="/assets/images/logo.svg" alt="logo" />
        {registerSucceed
          ? (
            <>
              <S.Alert severity="info">{t('register.register_success_info')}</S.Alert>
              <Link href="/auth/signup">
                <Typography variant="h4">{t('login.sign_in')}</Typography>
              </Link>
            </>
          )
          : (
            <>
              <form onSubmit={formik.handleSubmit}>
                <S.Card>
                  <S.Title mb={16}>
                    <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>{t('login.sign_up')}</Typography>
                  </S.Title>

                  <Box width="100%" mb={12}>
                    <Stepper step={step} onChangeStep={setStep} length={2} />
                  </Box>

                  <Grid container columns={1} spacing={16}>
                    <FormBuilder
                      type={currentStepContent?.type}
                      attributes={currentStepContent?.attributes}
                      label={currentStepContent?.label}
                      fields={currentStepContent?.fields}
                      formik={formik}
                      path={currentStepKey}
                    />
                  </Grid>

                  <Stack width="100%" direction="row" justifyContent="flex-end" mt={16} spacing={8}>
                    <Button size="large" disabled={step === 0} onClick={handleBackClick}>
                      {t('register.back')}
                    </Button>
                    <Button size="large" disabled={step === 1} onClick={handleNextClick}>
                      {t('register.next')}
                    </Button>
                    <Button size="large" disabled={step === 0} color="primary" type="submit">
                      {t('register.register')}
                    </Button>
                  </Stack>
                </S.Card>
              </form>

              <Box display="flex" mt={16}>
                <Typography variant="body1" mr={8}>{t('register.already_have_account')}</Typography>
                <Link href="/auth/signup">
                  <Typography variant="h4">{t('login.sign_in')}</Typography>
                </Link>
              </Box>
            </>
          )
        }
      </Box>
    </S.Container>
  )
}
