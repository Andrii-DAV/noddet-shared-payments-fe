import { AuthHeaderLinks } from '../AuthHeaderLinks/AuthHeaderLinks.tsx';
import { NavLinkListItem } from '../NavLinkListItem/NavLinkListItem.tsx';
import { useAuth } from '../../../../hooks/useAuth.ts';

interface HeaderProps {
  className: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { isAuthorized } = useAuth();

  return (
    <header className={className}>
      <nav className="w-full">
        <ul className="w-full flex gap-[16px]">
          <NavLinkListItem to={'/'}>Home</NavLinkListItem>
          <NavLinkListItem to={'/tours'}>Tours</NavLinkListItem>

          <AuthHeaderLinks isAuth={isAuthorized} />
        </ul>
      </nav>
    </header>
  );
};
