enum fieldNames {
  email = 'email',
  password = 'password',
}
export const signinFormInputs = [
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
];
