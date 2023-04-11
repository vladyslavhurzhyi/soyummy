import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';

import { Link, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const onClick = e => {
    navigate('/categories/beef');
  };

  return (
    <section>
      <div className=" bg-main_m md:bg-main_t xl:bg-main_d bg-no-repeat bg-center bg-size_main h-48.5 md:h-[768px] pt-[68px]  xl:pt-52  md:flex items-center">
        <div className="container  flex justify-between flex-row items-end xl:pb-64">
          <div className="flex  flex-col mx-auto md:mx-0 xl:justify-start  mb-8 ">
            <h1 className="text-accentDark text-center md:text-left font-normal text-[60px] md:text-[72px] xl:text-[100px] font-main dark:text-whiteText">
              <span className="  leading-10  tracking-tighter text-accentMain">
                So
              </span>
              Yummy
            </h1>
            <p className="font-normal text-center text-sm xl:text-lg font-main leading-6 md:text-left mb-[390px] md:mb-[32px] xl:mb-12 w-[248px] md:w-[362px] xl:w-[460px] tracking-tight dark:text-whiteText">
              "What to cook?" is not only a recipe app, it is, in fact, your
              cookbook. You can add your own recipes to save them for the
              future.
            </p>
            <SearchForm />
          </div>
          <ChooseYourBreakfast />
        </div>
      </div>

      <div className="relative z-[1] text-center mb-[100px] xl:mb-28">
        <PreviewCategories className="relative z-10 " />
        <Link to="/categories/beef">
          <CurveBtn
            type={'button'}
            onClick={onClick}
            text={'Other categories'}
            cssClass="othercateg-btn dark:text-whiteText"
          />
        </Link>
      </div>
    </section>
  );
};

export default MainPage;
