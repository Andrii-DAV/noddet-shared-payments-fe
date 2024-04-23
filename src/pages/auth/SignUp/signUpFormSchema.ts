import * as yup from 'yup';

export const SignUpFormSchema = yup.object().shape({
  name: yup.string().required('Name field is required'),
  email: yup
    .string()
    .email('Enter correct email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 characters')
    .required('Password field is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Name field is required'),
});
