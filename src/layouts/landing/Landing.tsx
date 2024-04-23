import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer/Footer.tsx';

export const Landing = () => {
  const commonClasses = 'px-16 w-full';
  return (
    <Fragment>
      <Header className={`px-16  ${commonClasses}`} />
      <main className={`py-4 ${commonClasses}`}>
        <Outlet />
      </main>
      <Footer className={`py-8 ${commonClasses}`} />
    </Fragment>
  );
};
