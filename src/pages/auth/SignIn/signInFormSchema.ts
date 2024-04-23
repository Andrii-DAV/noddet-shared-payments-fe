import * as yup from 'yup';

export const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter correct email address')
    .required('Email is required'),
  password: yup.string().required('Password field is required'),
});
