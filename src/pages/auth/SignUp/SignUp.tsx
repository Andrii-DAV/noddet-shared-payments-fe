import { SignUpForm } from './SignUpForm.tsx';
import { NavLink } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-blue-950 text-3xl font-bold text-center">
        Create Account
      </h2>

      <SignUpForm />

      <span className="ml-auto">
        Already have an account? <NavLink to={'/sign-in'}> Sign In.</NavLink>
      </span>
    </div>
  );
};
