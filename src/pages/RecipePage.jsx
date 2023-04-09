import { Loader } from 'components/Loader/Loader';
import { RecipeIngredientsList } from 'components/RecipeById/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipeById/RecipePageHero';
import { RecipePreparation } from 'components/RecipeById/RecipePreparation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/favoriteRecipesOperations';
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
    dispatch(getFavoriteRecipes());
  }, [dispatch, recipeId]);

  return (
    <main>
      {recipes._id && (
        <>
          <RecipePageHero />
          <RecipeIngredientsList />
          <RecipePreparation />
        </>
      )}
      {isLoading && !error && <Loader />}
    </main>
  );
};

export default RecipePage;
