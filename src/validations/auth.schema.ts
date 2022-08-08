import * as Yup from 'yup';
import i18n from '../i18n';

const t = i18n.t;

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email(t('validation.email_invalid'))
    .max(80, t('validation.max_length'))
    .required(t('validation.email_required')),
  password: Yup.string().required(t('validation.password_required')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], t('validation.password_not_matched'))
    .required(t('validation.confirm_password_required')),
});
