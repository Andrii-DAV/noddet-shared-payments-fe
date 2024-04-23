import { useSignupMutation } from '../../../store/auth/auth.api.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormSchema } from './signUpFormSchema.ts';
import { Button } from '../../../components/Button/Button.tsx';
import { signupFormInputs } from './signupFormInputs.ts';
import { FormInput } from '../../../components/FormInput/FormInput.tsx';

interface FormFields {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export const SignUpForm = () => {
  const [signUp, { isLoading }] = useSignupMutation(undefined);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    mode: 'onSubmit',
    resolver: yupResolver(SignUpFormSchema),
    defaultValues: {
      name: 'Andrii',
      email: 'test@gmail.com',
      password: '12345678',
      passwordConfirm: '12345678',
    },
  });

  const handleSignUp = async (data: FormFields) => {
    try {
      const { data: user } = await signUp(data).unwrap();
      console.log('succeeded', user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="w-full">
      {signupFormInputs.map((item) => (
        <FormInput
          {...item}
          register={register(item.id)}
          error={errors[item.id]?.message}
          key={item.id}
          className="mt-4"
        />
      ))}

      <Button type="submit" text="sign up" disabled={isLoading} />
    </form>
  );
};
