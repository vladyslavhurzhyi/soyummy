import * as Yup from 'yup';

import {
  nameRegExp,
  emailRegExp,
  notSecurePasswordRegExp,
} from '../regExp/regExp';

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2)
    .matches(nameRegExp, 'Name must contain only letters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .max(21)
    .matches(notSecurePasswordRegExp, 'Your password is little secure'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
  password: Yup.string().required('Password is required'),
});
