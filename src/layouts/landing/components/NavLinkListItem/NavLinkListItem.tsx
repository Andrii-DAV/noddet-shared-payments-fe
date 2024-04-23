import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface NavLinkListItemProps {
  to: string;
  children: ReactNode;
  className?: string;
}
export const NavLinkListItem = ({
  to,
  children,
  className,
}: NavLinkListItemProps) => {
  return (
    <li
      className={`relative group cursor-pointer ${className || ''} text-black hover:text-white font-bold text-xl`}
    >
      <NavLink to={to} className="block py-2 px-[16px] z-20 relative ">
        {children}
      </NavLink>
      <div
        className={clsx(
          'transition-all absolute w-full h-[10px] bottom-[3px] bg-green-300 bg-opacity-30 z-10 group-hover:h-[90%] group-hover:bg-opacity-100',
          {}
        )}
      ></div>
    </li>
  );
};
