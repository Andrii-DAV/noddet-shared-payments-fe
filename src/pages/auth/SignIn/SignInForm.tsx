import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInFormSchema } from './signInFormSchema.ts';
import { Button } from '../../../components/Button/Button.tsx';
import { signinFormInputs } from './signinFormFields.ts';
import FormInput from '../../../components/FormInput';
import { useLoginMutation } from '../../../store/auth/auth.api.ts';
import { useNavigate } from 'react-router-dom';

interface SignInFormData {
  email: string;
  password: string;
}
export const SignInForm = () => {
  const [login, { isLoading }] = useLoginMutation(undefined);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: 'test@gmail.com',
      password: '12345678',
    },
  });
  const handleSignIn = async (data: SignInFormData) => {
    try {
      await login(data).unwrap();
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      {signinFormInputs.map((item) => (
        <FormInput
          {...item}
          register={register(item.id)}
          error={errors[item.id]?.message}
          key={item.id}
          className="mt-4"
        />
      ))}
      <Button type="submit" text="sign in" disabled={isLoading} />
    </form>
  );
};
