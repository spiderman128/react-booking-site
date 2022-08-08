// Dependencies
import React, { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
} from '@mui/material';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

// Components
import { Input, Select, Typography } from '../../../../components';

// Interfaces
import { IForm } from '../../index';
import { Gender } from '../../../../interfaces';

interface IPersonalDataPanel {
  setForm: (form: IForm | null) => void;
}

// Validation schema
const validationSchema = Yup.object().shape({
  personalData: Yup.object().shape({
    gender: Yup.mixed()
      .oneOf([Gender.Male, Gender.Female])
      .required('Required Field!'),
    dateOfBirth: Yup.date().required('Required Field!'),
    firstName: Yup.string().required('Required Field!'),
    lastName: Yup.string().required('Required Field!'),
  }),
  contact: Yup.object().shape({
    phone: Yup.string().required('Required Field!'),
  }),
});

// Constants
const initialValues = {
  personalData: {
    gender: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
  },
  contact: {
    phone: '',
    fax: '',
    mobile: '',
    email: '',
  },
};

// Export PersonalData panel
export const PersonalDataPanel: FC<IPersonalDataPanel> = ({ setForm }) => {
  // Get translation from hook
  const { t } = useTranslation();

  // Create form form hook
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      validationSchema,
      initialValues,
      onSubmit: (values) => console.log(values),
    });

  // On mounted
  useEffect(() => {
    setForm({ submit: handleSubmit });

    return () => {
      setForm(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return PersonalData panel
  return (
    <form onSubmit={handleSubmit}>
      <Typography mb={20} variant="h3">
        {t('objects_detail.personal_data')}
      </Typography>
      <Grid
        container
        columns={2}
        columnSpacing={{ xs: 20, lg: 50 }}
        rowSpacing={25}
      >
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.personalData?.gender && touched.personalData?.gender
            )}
          >
            <FormLabel required>{t('objects_detail.gender')}</FormLabel>
            <Select
              size="medium"
              name="personalData.gender"
              value={values.personalData.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="male">{t('objects_detail.male')}</MenuItem>
              <MenuItem value="female">{t('objects_detail.female')}</MenuItem>
            </Select>
            <FormHelperText>
              {Boolean(
                errors.personalData?.gender && touched.personalData?.gender
              ) && errors.personalData?.gender}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.personalData?.firstName && touched.personalData?.firstName
            )}
          >
            <FormLabel required>{t('objects_detail.first_name')}</FormLabel>
            <Input
              size="medium"
              name="personalData.firstName"
              value={values.personalData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(
                errors.personalData?.firstName &&
                  touched.personalData?.firstName
              ) && errors.personalData?.firstName}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.personalData?.dateOfBirth &&
                touched.personalData?.dateOfBirth
            )}
          >
            <FormLabel required>{t('objects_detail.date_of_birth')}</FormLabel>
            <Input
              size="medium"
              type="date"
              name="personalData.dateOfBirth"
              value={values.personalData.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(
                errors.personalData?.dateOfBirth &&
                  touched.personalData?.dateOfBirth
              ) && errors.personalData?.dateOfBirth}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.personalData?.lastName && touched.personalData?.lastName
            )}
          >
            <FormLabel required>{t('objects_detail.last_name')}</FormLabel>
            <Input
              size="medium"
              name="personalData.lastName"
              value={values.personalData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(
                errors.personalData?.lastName && touched.personalData?.lastName
              ) && errors.personalData?.lastName}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 28, mb: 32 }} />
      <Typography mb={20} variant="h3">
        {t('objects_detail.contact')}
      </Typography>
      <Grid
        container
        columns={2}
        columnSpacing={{ xs: 20, lg: 50 }}
        rowSpacing={{ xs: 10, lg: 25 }}
      >
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.contact?.phone && touched.contact?.phone)}
          >
            <FormLabel required>{t('objects_detail.phone')}</FormLabel>
            <Input
              size="medium"
              name="contact.phone"
              value={values.contact.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.contact?.phone && touched.contact?.phone) &&
                errors.contact?.phone}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.contact?.fax && touched.contact?.fax)}
          >
            <FormLabel>{t('objects_detail.fax')}</FormLabel>
            <Input
              size="medium"
              name="contact.fax"
              value={values.contact.fax}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.contact?.fax && touched.contact?.fax) &&
                errors.contact?.fax}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.contact?.mobile && touched.contact?.mobile)}
          >
            <FormLabel>{t('objects_detail.mobile')}</FormLabel>
            <Input
              size="medium"
              name="contact.mobile"
              value={values.contact.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.contact?.mobile && touched.contact?.mobile) &&
                errors.contact?.mobile}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.contact?.email && touched.contact?.email)}
          >
            <FormLabel>{t('objects_detail.email')}</FormLabel>
            <Input
              size="medium"
              name="contact.email"
              value={values.contact.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.contact?.email && touched.contact?.email) &&
                errors.contact?.email}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};
