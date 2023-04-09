import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/favoriteRecipesOperations';
import { Loader } from 'components/Loader/Loader';
import { removeFromFavorite } from 'redux/favoriteRecipes/favoriteRecipesOperations';

import {
  selectFavRecipes,
  selectFavError,
  selectFavIsLoading,
} from 'redux/favoriteRecipes/favoriteRecipesSelectors';

export const FavoriteList = () => {
  const favoriteRecipes = useSelector(selectFavRecipes);
  const error = useSelector(selectFavError);
  const isLoading = useSelector(selectFavIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipes());
  }, [dispatch]);

  return (
    <>
      {error && <div className=" bg-red-500">Error</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <RecipesList removeRecipe={removeFromFavorite} data={favoriteRecipes} />
      )}
    </>
  );
};
