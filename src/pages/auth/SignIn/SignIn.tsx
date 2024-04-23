import { NavLink } from 'react-router-dom';
import { SignInForm } from './SignInForm.tsx';

export const SignIn = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-blue-950 text-3xl font-bold text-center">Sign In</h2>
      <SignInForm />
      <span className="ml-auto mt-[32px]">
        Don't have an account? <NavLink to={'/sign-up'}> Sign Up.</NavLink>
      </span>
    </div>
  );
};
