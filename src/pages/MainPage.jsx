import { CurveBtn } from 'components/CurveBtn/CurveBtn';
// import {PreviewCategories} from "components/PreviewCategories/PreviewCategories"
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
// import { getCategoryList, getPopularList } from 'redux/outerRecipes/outerRecipesOperations';
// import { getFullCategoryList, getPopular } from 'redux/outerRecipes/outerRecipesSelectors';

const MainPage = () => {
  //   const ingredients = useSelector(getIngredients);
  //   const categories = useSelector(getFullCategoryList);
  //   const popularRecipes = useSelector(getPopular);
  //   const dispatcher = useDispatch();
  const navigate = useNavigate();

  const onClick = e => {
    navigate('/categories');
  };

  const handelOnSubmit = (query, type) => {
    if ((query = '')) {
      toast.error(`You didn't enter anything to search`, {
        position: 'top-center',
      });
      return;
    }
    navigate(`/search?query=${query}&type=${type}`);
  };

  //   useEffect(() => {
  //     if (categories.length === 0) {
  //       dispatcher(getCategoryList());
  //     }
  //   }, [dispatcher, categories.length]);

  //   useEffect(() => {
  //     if (categories.length === 0) {
  //       dispatcher(getPopularRecipes());
  //     }
  //   }, [dispatcher, popularRecipes.length]);

  //   useEffect(() => {
  //     if (categories.length === 0) {
  //       dispatcher(getAllIngredients());
  //     }
  //   }, [dispatcher, ingredients.length]);

  return (
    <>
      <div className="bg-main bg-no-repeat  bg-cover h-48.5 pt-80 pb-[32rem] ">
        {/* <Container> */}
          <div class="flex justify-between flex-row items-end">
            <div className="flex  flex-col justify-start mb-8 ">
              <h1 className="text-accentDark font-normal text-customXxxl font-main">
                <span className="font-normal text-customXxxl leading-10 text-center tracking-tighter text-accentMain">
                  So
                </span>
                Yummy
              </h1>
              <p className="font-normal text-lg font-main leading-6 text-left mb-12 w-[460px] tracking-tight">
                "What to cook?" is not only a recipe app, it is, in fact, your
                cookbook. You can add your own recipes to save them for the
                future.
              </p>
            <SearchForm handleOnSubmit={handelOnSubmit} />
          </div>
          <ChooseYourBreakfast />
        </div>
      </div>
      {/* <PreviewCategories /> */}
      <div>
        <Link to="/categories/beef">
          <CurveBtn
            type={'button'}
            onClick={onClick}
            text={'Other categories'}
          />
        </Link>

      </div>
    </>
  );
};

export default MainPage;
