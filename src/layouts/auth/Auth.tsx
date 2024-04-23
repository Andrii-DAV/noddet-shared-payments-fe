import { Navigate } from 'react-router-dom';

import { NavLink, Outlet } from 'react-router-dom';
import BgImage from '../../assets/signupbg.jpg';
import { useAuth } from '../../hooks/useAuth.ts';
export const Auth = () => {
  const { isAuthorized } = useAuth();

  if (isAuthorized) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <header className="relative">
        <NavLink
          to="/"
          className={`absolute w-[45px] h-[45px] bg-green-300 rounded-full top-[15px] right-[35px] text-xl
            flex items-center justify-center cursor-pointer 
            transition-all hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5`}
        >
          🏠
        </NavLink>
      </header>
      <main className="w-full h-screen flex bg-cover">
        <div className="hidden sm:block bg-amber-500 sm:w-[35%] lg:w-[45%] h-full">
          <img src={BgImage} alt="background" className="h-full object-cover" />
        </div>

        <div className="flex flex-col gap-[34px] w-full lg:w-[55%] pt-[126px] px-[48px]">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
