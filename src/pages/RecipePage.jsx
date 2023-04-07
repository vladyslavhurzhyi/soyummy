import { Loader } from 'components/Loader/Loader';
import { IngredientList } from 'components/RecipeById/IngredientList';
import { RecipePageHero } from 'components/RecipeById/RecipePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from 'redux/recipes/recipesOperations';
import {
  selectError,
  selectIsLoading,
  selectRecipes,
} from 'redux/recipes/recipesSelectors';

const RecipePage = () => {
  const recipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, recipeId]);

  return (
    <main>
      {recipes.code && (
        <>
          <RecipePageHero />
          <IngredientList />
        </>
      )}
      {isLoading && !error && <Loader />}
    </main>
  );
};

export default RecipePage;
