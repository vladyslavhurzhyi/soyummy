import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteRecipes,
  // getFavoriteRecipes,
  // removeFromFavorite,
} from 'redux/favoriteRecipes/favoriteRecipesOperations';
// import { selectFavRecipes } from 'redux/favoriteRecipes/favoriteRecipesSelectors';
import { selectRecipes } from 'redux/recipes/recipesSelectors';

export const RecipePageHero = data => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  // const favorites = useSelector(selectFavRecipes);
  const { _id: recipeId, title, description, time } = recipes.data[0];

  // const isFavorites = favorites.some(item => item._id === recipeId);

  // console.log(favorites);
  // console.log(isFavorites);

  const handleClickAddFavorite = () => {
    dispatch(addFavoriteRecipes(recipeId));
    // dispatch(getFavoriteRecipes());
  };

  // const handleClickRemoveFavorite = () => {
  //   dispatch(removeFromFavorite(recipeId));
  //   dispatch(getFavoriteRecipes());
  // };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex flex-col justify-between bg-recipePage bg-cover bg-center bg-no-repeat w-full h-[455px] md:h-[495px] xl:h-[493px] text-center mb-8 px-8 md:px-26 xl:px-96 ">
        <div>
          <MainPageTitle
            pageTitle={title}
            className="main-title-accent mb-[18px] md:mb-6 mx-auto"
          />
          <p className="block text-xs md:text-lg md:leading-6 text-accentDark mx-auto max-w-[299px] md:max-w-[500px] xl:max-w-[656px]">
            {description}
          </p>
        </div>
        <div className="pb-[110px] md:pb-[120px] xl:pb-8">
          {true && (
            <CurveBtn
              text="Add to favorite recipes"
              cssClass="othercateg-btn text-customRecipesTime text-accentDark px-[16.9px] py-[8.9px] mb-[42px] md:mb-[40px] xl:mb-12"
              onClick={() => handleClickAddFavorite()}
            />
          )}
          {/* {true && (
            <CurveBtn
              text="Remove from favorite recipes"
              cssClass="othercateg-btn text-customRecipesTime text-accentDark px-[16.9px] py-[8.9px] mb-[42px] md:mb-[40px] xl:mb-12"
              onClick={() => handleClickRemoveFavorite()}
            />
          )} */}
          <div className="flex justify-center items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 w-3.5 h-3.5"
            >
              <g clipPath="url(#clip0_264_756)">
                <path
                  d="M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00002C12.8327 3.77836 10.221 1.16669 6.99935 1.16669C3.77769 1.16669 1.16602 3.77836 1.16602 7.00002C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z"
                  stroke="#23262A"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 3.5V7L9.33333 8.16667"
                  stroke="#23262A"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_264_756">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {time && (
              <p className="text-customRecipesTime text-[#23262A]">
                {time} min
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
