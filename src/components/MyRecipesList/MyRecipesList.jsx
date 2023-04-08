import { useEffect } from 'react';
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

// import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';

export const MyRecipesList = ({ cssClass }) => {
  const favoriteRecipes = useSelector(selectMyRecipes);
  const error = useSelector(selectMyError);
  const isLoading = useSelector(selectMyIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes());
  }, [dispatch]);

  return (
    <>
      {error && <div className=" bg-red-500">Error</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <RecipesList
          removeRecipe={removeMyRecipes}
          cssClass={cssClass}
          data={favoriteRecipes}
        />
      )}
    </>
  );
};
