import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipesList } from 'components/RecipesList/RecipesList';
import {
  getMyRecipes,
  removeMyRecipes,
} from 'redux/myRecipes/myRecipesOperations';
import { Loader } from 'components/Loader/Loader';
import {
  selectMyError,
  selectMyIsLoading,
  selectMyRecipes,
} from 'redux/myRecipes/myRecipesSelectors';

import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';

export const MyRecipesList = ({ cssClass }) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const myRecipes = useSelector(selectMyRecipes);
  const error = useSelector(selectMyError);
  const isLoading = useSelector(selectMyIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes(paginationPage));
  }, [dispatch, paginationPage]);

  const pagePlusOne = () => {
    setPaginationPage(prev => prev + 1);
  };

  return (
    <>
      <button
        onClick={() => {
          pagePlusOne();
        }}
      >
        page+1
      </button>
      <RecipesListPaginator />
      {error && <div className=" bg-red-500">Error</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <RecipesList
          removeRecipe={removeMyRecipes}
          cssClass={cssClass}
          data={myRecipes}
        />
      )}
    </>
  );
};
