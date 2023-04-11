import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import error from '../images/error.jpg';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <MainPageTitle pageTitle="" className="main-title-empty" />
        <div>
          <img src={error} alt="error" className="pt-4" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
