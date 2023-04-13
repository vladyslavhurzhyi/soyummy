import { ButtonToTop } from 'components/ButtonToTop/ButtonToTop';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="relative">
          <Outlet />
          <ButtonToTop />
        </div>
      </Suspense>
      <Footer />
    </>
  );
};
