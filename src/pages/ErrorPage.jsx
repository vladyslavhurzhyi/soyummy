import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import error from '../images/error.webp';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <MainPageTitle pageTitle="" className="main-title-empty" />
        <div
          className="flex flex-col items-center
         object-center text-center"
        >
          <img
            src={error}
            alt="error"
            className="rounded mb-3.5 md:mb-8 pt-4 md:h-[327px] xl:h-[331px]"
          />
          <p className="text-[18px] md:text-customBase font-semibold mb-2 md:mb-3.5 dark:text-whiteText">
            We are sorry,
          </p>
          <p className="text-customXxs md:text-[18px] leading-[18px] mb-[100px] md:mb-[204px] w-48 md:w-full md:min-w-[430px] dark:text-[#FAFAFA80]">
            but the page you were looking for can’t be found..
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
