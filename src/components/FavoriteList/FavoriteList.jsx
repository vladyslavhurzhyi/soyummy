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
import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import { useState } from 'react';

export const FavoriteList = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const { current_page, data, total, per_page } = useSelector(selectFavRecipes);
  const favoriteRecipes = data;
  const error = useSelector(selectFavError);
  const isLoading = useSelector(selectFavIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipes(paginationPage));
  }, [dispatch, paginationPage]);

  const pageIncrement = () => {
    setPaginationPage(prev => prev + 1);
  };
  const pageDecrement = () => {
    setPaginationPage(prev => prev - 1);
  };

  const handlePaginationClick = event => {
    const buttonValue = Number(event.target.textContent);

    setPaginationPage(buttonValue);
  };

  return (
    <>
      {error && <div className=" bg-red-500">Error</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RecipesList
            removeRecipe={removeFromFavorite}
            data={favoriteRecipes}
          />
          {total > 0 && (
            <RecipesListPaginator
              current_page={current_page}
              total={total}
              per_page={per_page}
              handlePaginationClick={handlePaginationClick}
              pageIncrement={pageIncrement}
              pageDecrement={pageDecrement}
            />
          )}
        </>
      )}
    </>
  );
};
