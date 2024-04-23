enum fieldNames {
  name = 'name',
  email = 'email',
  password = 'password',
  passwordConfirm = 'passwordConfirm',
}
export const signupFormInputs = [
  {
    id: fieldNames.name,
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    id: fieldNames.email,
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    id: fieldNames.password,
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    required: true,
  },
  {
    id: fieldNames.passwordConfirm,
    type: 'password',
    placeholder: 'Confirm your password',
    label: 'Confirm Password',
    required: true,
  },
];
