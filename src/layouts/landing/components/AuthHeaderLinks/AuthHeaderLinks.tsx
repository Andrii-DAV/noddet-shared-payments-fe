import React from 'react';
import { NavLinkListItem } from '../NavLinkListItem/NavLinkListItem.tsx';
import { Button } from '../../../../components/Button/Button.tsx';
import { useLazyLogoutQuery } from '../../../../store/auth/auth.api.ts';
import { selectUser } from '../../../../store/auth/auth.selectors.ts';
import { useSelector } from 'react-redux';

interface AuthHeaderLinksProps {
  isAuth: boolean;
}
export const AuthHeaderLinks = ({ isAuth }: AuthHeaderLinksProps) => {
  const user = useSelector(selectUser);
  const [logout, { isLoading }] = useLazyLogoutQuery(undefined);

  if (isAuth) {
    return (
      <React.Fragment>
        <Button
          text={'Sign Out'}
          className="w-fit ml-auto"
          disabled={isLoading}
          onClick={async () => {
            console.log('...');
            try {
              await logout(undefined).unwrap();
              localStorage.removeItem('jwt');
            } catch (e) {
              console.error(e);
            }
          }}
        />

        <li className="text-2xl flex flex-col">
          <span>Hello, </span>
          <span>{user?.name || ''}</span>{' '}
        </li>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <NavLinkListItem to="/sign-in" className="ml-auto">
        Sign In
      </NavLinkListItem>
      <NavLinkListItem to="/sign-up">Sign Up</NavLinkListItem>
    </React.Fragment>
  );
};
