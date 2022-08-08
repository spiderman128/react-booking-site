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

interface IProfilePanel {
  setForm: (form: IForm | null) => void;
}

// Validation schema
const validationSchema = Yup.object().shape({
  profile: Yup.object().shape({
    gender: Yup.mixed()
      .oneOf([Gender.Male, Gender.Female])
      .required('Required Field!'),
    company: Yup.date().required('Required Field!'),
    firstName: Yup.string().required('Required Field!'),
    lastName: Yup.string().required('Required Field!'),
  }),
  contact: Yup.object().shape({
    phone: Yup.string().required('Required Field!'),
    email: Yup.string().email('Invalid Field!').required('Required Field!'),
  }),
});

// Constants
const initialValues = {
  profile: {
    gender: '',
    company: '',
    firstName: '',
    lastName: '',
    position: '',
  },
  contact: {
    phone: '',
    email: '',
    mobile: '',
    homepage: '',
  },
};

// Export Profile panel
export const ProfilePanel: FC<IProfilePanel> = ({ setForm }) => {
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

  // Return Profile panel
  return (
    <form onSubmit={handleSubmit}>
      <Typography mb={20} variant="h3">
        {t('brokers_detail.profile')}
      </Typography>
      <Grid
        container
        columns={2}
        columnSpacing={{ xs: 20, lg: 50 }}
        rowSpacing={25}
      >
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.profile?.gender && touched.profile?.gender)}
          >
            <FormLabel required>{t('brokers_detail.gender')}</FormLabel>
            <Select
              size="medium"
              name="profile.gender"
              value={values.profile.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="male">{t('brokers_detail.male')}</MenuItem>
              <MenuItem value="female">{t('brokers_detail.female')}</MenuItem>
            </Select>
            <FormHelperText>
              {Boolean(errors.profile?.gender && touched.profile?.gender) &&
                errors.profile?.gender}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.profile?.firstName && touched.profile?.firstName
            )}
          >
            <FormLabel required>{t('brokers_detail.first_name')}</FormLabel>
            <Input
              size="medium"
              name="profile.firstName"
              value={values.profile.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(
                errors.profile?.firstName && touched.profile?.firstName
              ) && errors.profile?.firstName}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.profile?.company && touched.profile?.company)}
          >
            <FormLabel required>{t('brokers_detail.company')}</FormLabel>
            <Input
              size="medium"
              name="profile.company"
              value={values.profile.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.profile?.company && touched.profile?.company) &&
                errors.profile?.company}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.profile?.lastName && touched.profile?.lastName
            )}
          >
            <FormLabel required>{t('brokers_detail.last_name')}</FormLabel>
            <Input
              size="medium"
              name="profile.lastName"
              value={values.profile.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.profile?.lastName && touched.profile?.lastName) &&
                errors.profile?.lastName}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(
              errors.profile?.position && touched.profile?.position
            )}
          >
            <FormLabel>{t('brokers_detail.position')}</FormLabel>
            <Input
              size="medium"
              name="profile.position"
              value={values.profile.position}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.profile?.position && touched.profile?.position) &&
                errors.profile?.position}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 28, mb: 32 }} />
      <Typography mb={20} variant="h3">
        {t('brokers_detail.contacts')}
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
            <FormLabel required>{t('brokers_detail.phone')}</FormLabel>
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
            error={Boolean(errors.contact?.email && touched.contact?.email)}
          >
            <FormLabel required>{t('brokers_detail.email')}</FormLabel>
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
        <Grid item xs={2} sm={1}>
          <FormControl
            error={Boolean(errors.contact?.mobile && touched.contact?.mobile)}
          >
            <FormLabel>{t('brokers_detail.mobile')}</FormLabel>
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
            error={Boolean(
              errors.contact?.homepage && touched.contact?.homepage
            )}
          >
            <FormLabel>{t('brokers_detail.homepage')}</FormLabel>
            <Input
              size="medium"
              name="contact.homepage"
              value={values.contact.homepage}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormHelperText>
              {Boolean(errors.contact?.homepage && touched.contact?.homepage) &&
                errors.contact?.homepage}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};
